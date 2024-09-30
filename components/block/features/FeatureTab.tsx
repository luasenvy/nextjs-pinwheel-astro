import classNames from "classnames";
import { parseInline } from "marked";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

interface FeatureTabItem {
  title: string;
  content: string;
  image: StaticImageData;
}

export interface FeatureTabProps {
  title: string;
  list: Array<FeatureTabItem>;
}

export default function FeatureTab({ title, list }: FeatureTabProps) {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="row mt-[120px] items-center">
      <div className="col-8 mx-auto mb-10 text-center">
        {title.split("\n").map((text, i) => (
          <h2 key={i}>{(parseInline(text) as string).replace("&amp;", "&")}</h2>
        ))}
      </div>
      <div className="lg:col-6">
        {list.map(({ image }, index) => (
          <div
            key={`item-${index}`}
            className={`features-tab-penel ${active === index ? "active" : undefined} relative`}
          >
            <Image className="w-full object-contain" src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="mt-6 lg:col-6 lg:mt-0">
        <div className="lg:max-w-[473px]">
          {list.map(({ title, content }, index) => (
            <div
              className={classNames("features-tab-item mt-9 first:mt-0", {
                active: active === index,
              })}
              key={index}
            >
              {title.split("\n").map((text, i) => (
                <h2 key={i} className="lg:text-2xl" onClick={() => setActive(index)}>
                  {(parseInline(text) as string).replace("&amp;", "&")}
                </h2>
              ))}

              {content.split("\n").map((text, i) => (
                <p key={`content-${i}`} className="mt-4">
                  {(parseInline(text) as string).replace("&amp;", "&")}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
