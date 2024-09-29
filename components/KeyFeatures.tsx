import { parseInline } from "marked";
import Image from "next/image";

import type { FeatureItem } from "./HomepageFeature";

import HomapageFeature from "@/components/HomepageFeature";

import FeatureShapeImage from "@/public/images/feature-shape.png";

export interface KeyFeaturesProps {
  title: string;
  description: string;
  featureList: Array<FeatureItem>;
}

export default function KeyFeatures({ title, description, featureList }: KeyFeaturesProps) {
  return (
    <section className="section key-feature relative">
      <Image
        className="absolute left-0 top-0 -z-[1] -translate-y-1/2"
        src={FeatureShapeImage}
        height={126}
        width={63}
        alt=""
      />

      <div className="container">
        <div className="row justify-between text-center lg:text-start">
          <div className="lg:col-5">
            <h2>{(parseInline(title) as string).replace("&amp;", "&")}</h2>
          </div>
          <div className="mt-6 lg:col-5 lg:mt-0">
            <p>{(parseInline(description) as string).replace("&amp;", "&")}</p>
          </div>
        </div>

        <HomapageFeature featureList={featureList} />
      </div>
    </section>
  );
}
