"use client";

import { slug as slugify } from "github-slugger";

import { useParams } from "next/navigation";

import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";
import BlogCategories from "@/components/block/blog/BlogCategories";
import Blogs from "@/components/block/blog/Blogs";

import { type PostItem, categories as postCategories, posts } from "@/lib/data/blog";
import { categories } from "@/lib/data/categories";
import { humanize } from "@/lib/textConverter";

const taxonomyFilter = (posts: Array<PostItem>, key: string) =>
  posts.filter(({ metadata: { categories } }) =>
    categories.map((name: string) => slugify(name)).includes(key)
  );

interface CategoryPageProps {
  item: string;
}

export default function CategoryPage({ item }: CategoryPageProps) {
  const { category } = useParams();
  const filterByTags = taxonomyFilter(posts, category as string);

  return (
    <>
      <Shape />
      <section className="page-hero pb-8 pt-16">
        <div className="container">
          <div className="page-hero-content mx-auto max-w-[883px] text-center">
            <PageHeader {...categories} />
            <h1 className="h2 mb-14 text-center">
              Showing posts from <span className="text-primary">{humanize(item)}</span> category
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <BlogCategories categories={postCategories} />
          <Blogs posts={filterByTags} />
        </div>
      </section>
    </>
  );
}
