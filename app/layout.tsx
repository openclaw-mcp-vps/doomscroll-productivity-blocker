import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoomScroll Blocker — Earn Your Social Media",
  description: "Block social media until you complete GPS-verified outdoor activities. Reclaim your focus and build healthy habits."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ee2d155c-9942-46af-814f-83b0f7f56ae4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  );
}
