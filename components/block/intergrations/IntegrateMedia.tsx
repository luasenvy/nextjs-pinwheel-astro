"use client";

import classnames from "classnames";
import { parseInline } from "marked";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import type { IntegrationItem } from "@/lib/data/integrations";
import { humanize } from "@/lib/textConverter";

export interface IntegrateMediaProps {
  integrations: Array<IntegrationItem>;
  categories: Array<string>;
}

export default function IntegrateMedia({ integrations, categories }: IntegrateMediaProps) {
  const [active, setActive] = useState("");
  const filterPost = !active
    ? integrations
    : integrations.filter((post) => post.categories.includes(active));
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-10">
            <ul className="integration-tab filter-list flex flex-wrap items-center justify-center">
              <li>
                <span
                  className={`filter-btn ${
                    !active ? "filter-btn-active" : undefined
                  } btn btn-sm cursor-pointer`}
                  onClick={() => setActive("")}
                >
                  All Categories
                </span>
              </li>
              {categories.map((category, i) => (
                <li key={`category-${i}`} onClick={() => setActive(category)}>
                  <span
                    className={classnames("filter-btn btn btn-sm cursor-pointer", {
                      "filter-btn-active": active === category,
                    })}
                  >
                    {humanize(category)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="integration-tab-items row mt-10">
          {filterPost.map(({ image, name, slug, categories, excerpt }, i) => (
            <div key={i} className="integration-tab-item mb-8 md:col-6 lg:col-4">
              <div className="rounded-xl bg-white px-10 pb-8 pt-11 shadow-lg">
                <div className="integration-card-head flex items-center space-x-4">
                  <Image src={image} alt="" />
                  <div>
                    <h4 className="h4">{humanize(name)}</h4>
                    {categories.map((category, i) => (
                      <span className="font-medium" key={i}>
                        {humanize(category)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                  <p>{parseInline(excerpt.slice(0, 80))}</p>
                </div>

                <Link
                  className="group inline-flex items-center font-semibold text-dark hover:text-primary"
                  href={`/integrations/${slug}`}
                >
                  View integration
                  <AiOutlineArrowRight className="ml-1.5 text-xl font-bold duration-300 group-hover:ml-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
