import { ImageResponse } from "next/og";

export const alt = "Urologie Oberberg – Urologische Gemeinschaftspraxis Wiehl";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#E7F2F0",
        }}
      >
        <svg width="170" height="170" viewBox="54 52 460 460" fill="#2F7E78">
          <path d="M156.14,311.93c0,0-3.12-63.3-5.35-130.17S79.96,84.69,79.96,84.69s108.72,12.37,109.61,101.08 c0.89,88.71,1.34,129.28,1.34,129.28s-9.12,98.83,77.91,144.14C268.82,459.19,156.14,445.09,156.14,311.93z" />
          <path d="M411.83,311.93c0,0,3.12-63.3,5.35-130.17S488,84.69,488,84.69S379.28,97.06,378.39,185.77 c-0.89,88.71-1.34,129.28-1.34,129.28s9.12,98.83-77.91,144.14C299.14,459.19,411.83,445.09,411.83,311.93z" />
          <path d="M456.9,125.67c0,0-22.7,31.57-23.18,69.02c-1.33,104.44,19.12,276.35-147.8,279.77h-3.89 c-166.92-3.42-146.46-175.33-147.8-279.77c-0.48-37.44-23.18-69.02-23.18-69.02l0.99,188.86c0,0-1.88,168.59,171.53,165.47v0h0.8v0 c173.41,3.12,171.53-165.47,171.53-165.47L456.9,125.67z" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            color: "#17302C",
            letterSpacing: 20,
            marginTop: 48,
            fontWeight: 600,
          }}
        >
          UROLOGIE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#2F7E78",
            letterSpacing: 16,
            marginTop: 12,
          }}
        >
          OBERBERG
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#5C6F6B",
            marginTop: 40,
          }}
        >
          Urologische Gemeinschaftspraxis · Wiehl
        </div>
      </div>
    ),
    size
  );
}
