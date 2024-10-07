"use client";
import { useParams } from "next/navigation";

import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";
import CareerSidebar from "@/components/block/career/CareerSidebar";
import type { CareerItem } from "@/lib/data/career";

import { career as careerHead, careers, sidebar } from "@/lib/data/career";

interface SimilerItemsProps {
  career?: CareerItem;
  careers: Array<CareerItem>;
  slug?: string;
}

// similer products
const similerItems = ({ career, careers, slug }: SimilerItemsProps): Array<CareerItem> => {
  let categories: Array<string> = [];

  if (!career || !slug) return [];

  // set categories
  if (career.metadata.categories.length > 0) categories = career.metadata.categories;

  // filter by categories
  const filterByCategories = careers.filter(({ metadata }) =>
    categories.find((category) => metadata.categories.includes(category))
  );

  // merged after filter
  const mergedItems = Array.from(new Set(filterByCategories));

  // filter by slug
  return mergedItems.filter(({ metadata }) => metadata.slug !== slug);
};

export default function SingleCareer() {
  const { slug } = useParams();

  const career = careers.find(({ metadata }) => metadata.slug === slug);

  const similarPosts = similerItems({ career, careers, slug: career?.metadata.slug });

  const page_data = {
    index_title: careerHead.title,
    page_title: career?.metadata.title || "",
    slug: career?.metadata.slug || "",
  };

  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <div className="page-hero-content mx-auto max-w-[883px] text-center">
            <PageHeader {...page_data} />
          </div>
        </div>
      </section>
      <section className="section career-single pt-0">
        <div className="container">
          <div className="lg:gx-4 row">
            <div className="lg:col-8">
              <div className="content lg:py-[60px] rounded-xl bg-white p-7 shadow-lg lg:px-12">
                {career?.Component && <career.Component />}
              </div>
            </div>
            <CareerSidebar careers={similarPosts} sidebar={sidebar} />
          </div>
        </div>
      </section>
    </>
  );
}
