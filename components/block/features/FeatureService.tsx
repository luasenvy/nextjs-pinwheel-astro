import type { StaticImageData } from "next/image";
import Image from "next/image";

import { AiFillCheckCircle } from "react-icons/ai";

import Link from "@/components/ViewTransitionLink";

interface ButtonItem {
  enable: boolean;
  outline?: boolean;
  label: string;
  link: string;
}

export interface FeatureServiceProps {
  title: string;
  description: string;
  image: StaticImageData;
  list: Array<string>;
  buttons: Array<ButtonItem>;
}

export default function FeatureService({
  image,
  title,
  description,
  list,
  buttons,
}: FeatureServiceProps) {
  return (
    <div className="gx-5 row mt-16 items-center">
      <div className="lg:col-6 lg:order-2">
        <div className="relative">
          <Image height={354} width={476} className="w-full object-contain" src={image} alt="" />
        </div>
      </div>
      <div className="mt-6 lg:col-6 lg:order-1 lg:mt-0">
        <div>
          <h2 className="lg:text-4xl">{title}</h2>
          <p className="mt-4">{description}</p>
          <ul className="mt-6 text-dark lg:-ml-4">
            {list?.map((item, i) => (
              <li key={i} className="mb-2 flex items-center rounded px-4">
                <AiFillCheckCircle className="mr-3 fill-primary text-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-11 flex flex-wrap">
          {buttons.map(
            ({ enable, outline, label, link }, i) =>
              enable && (
                <Link
                  key={`btn-${i}`}
                  className={`btn m-3 ml-0 block sm:inline-block ${
                    outline ? "btn-outline-primary" : "btn-primary"
                  } `}
                  href={link}
                >
                  {label}
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
}
