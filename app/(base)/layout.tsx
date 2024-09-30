import { Merriweather, Poppins } from "next/font/google";

import TwSizeIndicator from "@/components/TwSizeIndicator";
import Footer from "@/components/block/Footer";
import Header from "@/components/block/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
  fallback: ["sans-serif"],
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-secondary",
  fallback: ["sans-serif"],
  display: "swap",
});

export default function BaseLayout({ children }: React.PropsWithChildren) {
  return (
    <body
      className={`${poppins.variable} ${merriweather.variable} text-base antialiased break-keep bg-bgDark2`}
    >
      <TwSizeIndicator />
      <Header />
      <main id="main-content">{children}</main>;
      <Footer />
    </body>
  );
}
