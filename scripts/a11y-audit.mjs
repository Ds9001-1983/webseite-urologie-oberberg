/**
 * Barrierefreiheits-Audit (BFSG / WCAG 2.1 AA) — fester Release-Check.
 *
 * Voraussetzung: laufender Server (npm run dev oder npm run start).
 *   node scripts/a11y-audit.mjs [baseUrl]   (Default: http://localhost:3000)
 *
 * Prüft alle Seiten mit axe-core (WCAG 2.1 A/AA), führt Tastatur-Checks
 * (Skip-Link, Mobilmenü, Formular-Fehlermeldungen) aus und verifiziert,
 * dass alle interaktiven Elemente einen zugänglichen Namen haben.
 * Exit-Code 1 bei jedem Befund → geeignet für CI.
 */
import { chromium } from "playwright-core";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const BASE = process.argv[2] ?? "http://localhost:3000";
const PAGES = ["/", "/bewerbung", "/barrierefreiheit", "/impressum", "/datenschutz"];

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`✗ ${msg}`);
};
const ok = (msg) => console.log(`✓ ${msg}`);

const browser = await chromium.launch({ channel: "chrome", headless: true });

// ---- 1) axe-core auf allen Seiten
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const path of PAGES) {
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  // Scroll-Reveals triggern, damit keine opacity-0-Inhalte geprüft werden
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1000);
  await page.evaluate(axeSource);
  const { violations } = await page.evaluate(() =>
    window.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
    })
  );
  if (violations.length === 0) {
    ok(`axe ${path}: 0 Violations`);
  } else {
    for (const v of violations) {
      fail(`axe ${path}: [${v.impact}] ${v.id} — ${v.help}`);
      for (const node of v.nodes.slice(0, 3)) {
        console.error(`    → ${node.target.join(" ")}`);
      }
    }
  }
}

// ---- 2) Tastatur-Checks (Startseite)
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.keyboard.press("Tab");
const skipText = await page.evaluate(() => document.activeElement?.textContent?.trim());
skipText === "Zum Inhalt springen"
  ? ok("Skip-Link ist erstes Fokusziel")
  : fail(`Skip-Link nicht erstes Fokusziel (war: ${skipText})`);
await page.keyboard.press("Enter");
await page.waitForTimeout(400);
(await page.evaluate(() => location.hash)) === "#main"
  ? ok("Skip-Link springt zu #main")
  : fail("Skip-Link springt nicht zu #main");

const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mob.goto(BASE + "/", { waitUntil: "networkidle" });
const closed = await mob.evaluate(() => ({
  inert: document.getElementById("mobile-menu")?.inert,
  expanded: document
    .querySelector('button[aria-controls="mobile-menu"]')
    ?.getAttribute("aria-expanded"),
}));
closed.inert === true && closed.expanded === "false"
  ? ok("Mobilmenü zu: inert + aria-expanded=false")
  : fail(`Mobilmenü-Zustand falsch: ${JSON.stringify(closed)}`);
await mob.close();

await page.goto(BASE + "/#kontakt", { waitUntil: "networkidle" });
await page.evaluate(() => document.getElementById("kontakt")?.scrollIntoView());
await page.waitForTimeout(1200);
await page.click('form button[type="submit"]');
await page.waitForTimeout(300);
const form = await page.evaluate(() => ({
  alerts: document.querySelectorAll('[role="alert"]').length,
  invalid: document.querySelectorAll('[aria-invalid="true"]').length,
}));
form.alerts === 3 && form.invalid === 3
  ? ok("Kontaktformular: Fehler als role=alert + aria-invalid")
  : fail(`Kontaktformular-Fehlerbehandlung: ${JSON.stringify(form)}`);

// ---- 3) Zugängliche Namen aller interaktiven Elemente (Screenreader-Proxy)
for (const path of PAGES) {
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const unnamed = await page.evaluate(() => {
    const interactive = document.querySelectorAll(
      'a[href], button, input:not([type="hidden"]), select, textarea, [role="button"], [role="link"]'
    );
    const out = [];
    for (const el of interactive) {
      if (el.closest("[inert]") || el.getAttribute("aria-hidden") === "true") continue;
      const name =
        el.getAttribute("aria-label") ||
        el.labels?.[0]?.textContent?.trim() ||
        el.textContent?.trim() ||
        el.getAttribute("title") ||
        (el.getAttribute("aria-labelledby") &&
          document.getElementById(el.getAttribute("aria-labelledby"))?.textContent?.trim());
      if (!name) out.push(el.outerHTML.slice(0, 100));
    }
    return out;
  });
  if (unnamed.length === 0) {
    ok(`Zugängliche Namen ${path}: alle interaktiven Elemente benannt`);
  } else {
    for (const html of unnamed) fail(`Element ohne zugänglichen Namen auf ${path}: ${html}`);
  }
}

await browser.close();
console.log(failures === 0 ? "\nAUDIT BESTANDEN" : `\nAUDIT FEHLGESCHLAGEN: ${failures} Befund(e)`);
process.exit(failures === 0 ? 0 : 1);
