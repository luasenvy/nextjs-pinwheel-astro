import React from "react";
import * as Icon from "react-feather";
import { BsPinAngleFill } from "react-icons/bs";

import type { PricingItem } from "@/lib/pricings";
import { humanize } from "@/lib/textConverter";

export default function PricingCard({
  icon,
  title,
  featured,
  pre_currency,
  price,
  post_currency,
  description,
  services,
  buttons,
}: PricingItem) {
  const key = humanize(icon) as keyof typeof Icon;
  const FeatherIcon = Icon[key];

  return (
    <div className="mt-8 px-3 md:col-6 lg:col-4 lg:mt-0" key={title}>
      <div
        className={`rounded-xl bg-white px-8 py-10 shadow-lg ${
          featured ? "-mt-16 border border-primary " : undefined
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="h3">{title}</h2>
            <p className="mt-3 text-2xl text-dark">
              {pre_currency} {price}.00 {post_currency}
            </p>
          </div>
          <span
            className={`inline-flex h-16 w-16 items-center justify-center rounded-full font-bold ${
              featured ? "bg-gradient text-white" : "bg-theme-light text-dark"
            }`}
          >
            <FeatherIcon className="font-semibold" />
          </span>
        </div>
        <p className="mt-6">{description}</p>
        <div className="my-6 border-y border-border py-6">
          <h4 className="h6">{services.title}</h4>

          <ul className="mt-6">
            {services.list.map((service, i) => (
              <li className="mb-3 text-sm" key={`service-${i}`}>
                <span className="mr-2">
                  <BsPinAngleFill
                    className={`mr-1 inline h-[14px] w-[14px] ${
                      featured ? "text-primary" : undefined
                    }`}
                  />
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <a
            className={`btn ${
              featured ? "btn-primary" : "btn-outline-white"
            } block h-[48px] w-full rounded-[50px] leading-[30px]`}
            href={buttons.buy_now.link}
          >
            {buttons.buy_now.label}
          </a>
          <a className="mt-6 inline-flex items-center text-dark" href={buttons.free_trial.link}>
            {buttons.free_trial.label}
            <svg
              className="ml-1.5"
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
