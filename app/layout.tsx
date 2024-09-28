import "@/styles/global.scss";

export const metadata = {
  title: "Pinwheel Astro",
  description: "Pinwheel Astro Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">{children}</html>;
}
