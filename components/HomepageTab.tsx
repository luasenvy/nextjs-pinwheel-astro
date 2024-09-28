"use client";

import classnames from "classnames";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import * as Icon from "react-feather";

import { humanize } from "@/lib/textConverter";

export interface TabItem {
  title: string;
  icon: string;
  image: StaticImageData;
}

export interface HomepageTabProps {
  title: string;
  description: string;
  tab_list: Array<TabItem>;
}

export default function HomepageTab({ tab_list, title, description }: HomepageTabProps) {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="tab gx-5 row items-center">
      <div className="lg:col-7 lg:order-2">
        <div className="tab-content">
          {tab_list.map(({ image }, index) => (
            <div
              key={index}
              className={`tab-content-panel ${active === index ? "active" : undefined}`}
            >
              <Image className="w-full object-contain" src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div className="text-container">
          <h2 className="lg:text-4xl">{title}</h2>
          <p className="mt-4">{description}</p>
          <ul className="tab-nav mt-8 border-b-0">
            {tab_list.map(({ title, icon }, index) => {
              const key = humanize(icon) as keyof typeof Icon;
              const FeatherIcon = Icon[key];

              return (
                <li
                  key={index}
                  className={classnames("tab-nav-item", {
                    active: active === index,
                  })}
                  onClick={() => setActive(index)}
                >
                  <span className="tab-icon mr-3">
                    {" "}
                    <FeatherIcon />
                  </span>
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
