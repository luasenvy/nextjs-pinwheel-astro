"use client";

import { parseInline } from "marked";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Shuffle from "shufflejs";

import Shape2Image from "@/public/images/shape-2.png";
import ShapeImage from "@/public/images/shape.png";

export interface GalleryProps {
  title: string;
  images: Array<StaticImageData>;
}

export default function Gallery({ title, images }: GalleryProps) {
  const photoGalleryRef = useRef<HTMLDivElement>(null);
  const shuffleSizerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = photoGalleryRef.current;
    const sizer = shuffleSizerRef.current;

    if (!element || !sizer) return;

    new Shuffle(element, {
      itemSelector: ".picture-item",
      sizer: sizer,
      columnWidth: 1,
    });
  }, [photoGalleryRef, shuffleSizerRef]);

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-8">
            <h2>{(parseInline(title) as string).replace("&amp;", "&")}</h2>
          </div>
        </div>

        <div className="relative">
          <div ref={photoGalleryRef} className="row" id="photo-gallery">
            {images.map((image, i) => (
              <div key={i} className="picture-item col-6 mt-12">
                {" "}
                <Image className="w-full" src={image} alt="" />
              </div>
            ))}

            <div ref={shuffleSizerRef} className="js-shuffle-sizer col-1"></div>
          </div>
          <Image className="absolute -bottom-5 -left-5 -z-[1]" src={Shape2Image} alt="" />
          <Image className="absolute -right-5 bottom-20 -z-[1] h-16 w-16" src={ShapeImage} alt="" />
        </div>
      </div>
    </section>
  );
}
