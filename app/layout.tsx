import "@/styles/global.scss";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Pinwheel Astro",
  description: "Pinwheel Astro Template",
  generator: "Next.js",
  authors: [{ name: "themefisher", url: "https://themefisher.com/" }],
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  width: "device-width",
  themeColor: [
    {
      color: "#fff",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#000",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">{children}</html>;
}
