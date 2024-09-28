"use client";

import Image from "next/image";

import type { StaticImageData } from "next/image";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

import type { HomepageTabProps } from "./HomepageTab";

import HomepageTab from "@/components/HomepageTab";
import VideoComponent from "@/components/VideoComponent";

import Shape2Image from "@/public/images/shape-2.png";

interface OurService {
  title: string;
  description: string;
  image?: StaticImageData;
  video?: {
    thumbnail: StaticImageData;
    video_id: string;
  };
  button?: {
    enable: boolean;
    label: string;
    link: string;
  };
  list?: Array<string>;
}

export interface ServiceProps {
  homepage_tab: HomepageTabProps;
  our_service: Array<OurService>;
}

export default function Service({ homepage_tab, our_service }: ServiceProps) {
  return (
    <section className="section services">
      <div className="container">
        <HomepageTab {...homepage_tab} />

        {our_service.map(({ button, description, image, list, title, video }, index: number) => (
          <div key={`our-service-${index}`} className="gx-5 row mt-12 items-center lg:mt-0">
            <div className={`lg:col-7 ${index % 2 === 0 ? "order-0" : "order-1"}`}>
              {image && (
                <div className="relative">
                  <Image
                    className="w-full object-contain"
                    alt="service"
                    width={667}
                    height={498}
                    src={image}
                  />
                  <Image
                    className="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
                    src={Shape2Image}
                    alt=""
                    height={147}
                    width={151}
                  />
                </div>
              )}
              {video && (
                <VideoComponent
                  src={video.thumbnail}
                  height={370}
                  width={700}
                  title={title}
                  video_id={video.video_id}
                  video_width="w-[700px]"
                  video_height="h-[370px]"
                />
              )}
            </div>
            <div className={`mt-6 lg:col-5 lg:mt-0 ${index % 2 === 0 ? "order-1" : "order-0"}`}>
              <div className="text-container">
                <h2 className="lg:text-4xl">{title}</h2>
                <p className="mt-4">{description}</p>
                {button && button.enable && (
                  <Link className="btn btn-white mt-6" href={button.link}>
                    {button.label}
                  </Link>
                )}
                <ul className="mt-6 text-dark lg:-ml-4">
                  {list?.map((item, i) => (
                    <li key={`service-item-${i}`} className="mb-2 flex items-center rounded px-4">
                      <AiFillCheckCircle className="mr-3 fill-primary text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
