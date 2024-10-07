"use client";

import classnames from "classnames";
import { slug as slugify } from "github-slugger";

import { useParams } from "next/navigation";

import Link from "@/components/ViewTransitionLink";

import { humanize } from "@/lib/textConverter";

interface BlogCategoriesProps {
  categories: Array<string>;
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
  const { category } = useParams();

  return (
    <div className="category-filter mb-10 mt-3 rounded-xl bg-[#EEEEEE] p-4">
      <ul className="filter-list flex flex-wrap items-center">
        <li>
          <Link
            className={classnames("filter-btn btn btn-sm", {
              "filter-btn-active": !category,
            })}
            href="/categories"
          >
            All Categories
          </Link>
        </li>
        {categories.map((cat, i) => (
          <li key={`cat-${i}`}>
            <Link
              className={classnames("filter-btn btn btn-sm", {
                "filter-btn-active": category === slugify(cat),
              })}
              href={`/categories/${slugify(cat)}`}
            >
              {humanize(cat)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
