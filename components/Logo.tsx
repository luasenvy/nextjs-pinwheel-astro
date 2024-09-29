import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/logo.png";

interface LogoProps {
  src?: StaticImageData;
}

export default function Logo({ src }: LogoProps) {
  return (
    <Link href="/" className="navbar-brand block">
      <Image width={147} height={31} src={src ?? logo} alt="Pinwheel Astro" />
    </Link>
  );
}
