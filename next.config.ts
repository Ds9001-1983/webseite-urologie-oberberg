import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
  async headers() {
    return [
      // noindex auf allen Nebenadressen (*.vercel.app, Previews), nur die Hauptdomain bleibt indexierbar.
      // Next.js verankert den Host-Wert als regulären Ausdruck (^…$), deshalb sind die Punkte escaped.
      {
        source: "/:path*",
        missing: [{ type: "host", value: "www\\.urologie-oberberg\\.de" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
