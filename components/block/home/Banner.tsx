import type { StaticImageData } from "next/image";
import Image from "next/image";

import Link from "@/components/ViewTransitionLink";

import BannerShapeImage from "@/public/images/banner-shape.png";

export interface BannerProps {
  title: string;
  button: {
    enable: boolean;
    label: string;
    link: string;
  };
  image: StaticImageData;
  content: string;
}

export default function Banner({ title, button, image, content }: BannerProps) {
  return (
    <section className="section banner relative">
      <div className="container">
        <div className="row items-center">
          <div className="lg:col-6">
            <h1 className="banner-title">{title}</h1>

            <p className="mt-6">{content}</p>

            {button.enable && (
              <Link className="btn btn-white mt-8" href={button.link}>
                {button.label}
              </Link>
            )}
          </div>
          <div className="lg:col-6">
            <Image
              className="w-full object-contain"
              alt="banner"
              src={image}
              width={603}
              height={396}
            />
          </div>
        </div>
      </div>

      <Image
        className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
        alt="banner"
        src={BannerShapeImage}
        width={496}
        height={466}
      />
    </section>
  );
}
