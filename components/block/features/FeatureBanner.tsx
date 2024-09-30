import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

import FeaturesBannerImage from "@/public/images/features-banner-img.png";

export interface FeatureBannerProps {
  title: string;
  banner: {
    title: string;
    content: string;
    image: StaticImageData;
    button: {
      enable: boolean;
      label: string;
      link: string;
    };
  };
}

export default function FeatureBanner({ title, banner }: FeatureBannerProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mb-14 text-center lg:col-6 lg:order-1 lg:mb-0 lg:mt-0 lg:text-left">
            <ul className="breadcrumb mb-8 inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2">
              <li className="leading-none text-dark">
                <Link className="inline-flex items-center text-primary" href="/">
                  <svg
                    className="mr-1.5"
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z"
                      fill="black"
                    ></path>
                  </svg>
                  <span className="text-sm leading-none">Home</span>
                </Link>
              </li>
              <li className="leading-none text-dark">
                <span className="text-sm leading-none">/ {title}</span>
              </li>
            </ul>
            <h1>{banner.title}</h1>
            <p className="mt-6">{banner.content}</p>
            {banner.button.enable && (
              <Link className="btn btn-primary mt-6" href={banner.button.link}>
                {banner.button.label}
              </Link>
            )}
          </div>
          <div className="lg:col-6 lg:order-2">
            <Image className="mx-auto" src={FeaturesBannerImage} width={412} height={483} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
