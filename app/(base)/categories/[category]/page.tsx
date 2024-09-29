"use client";

import { slug as slugify } from "github-slugger";

import { useParams } from "next/navigation";

import BlogCategories from "@/components/BlogCategories";
import Blogs from "@/components/Blogs";
import PageHeader from "@/components/PageHeader";
import Shape from "@/components/Shape";

import posts, { type PostItem } from "@/lib/posts";
import { humanize } from "@/lib/textConverter";

const categories = posts.reduce(
  (acc, { categories }) => categories.reduce((acc, category) => acc.add(category), acc),
  new Set<string>()
);

const taxonomyFilter = (posts: Array<PostItem>, key: string) =>
  posts.filter(({ categories }) => categories.map((name: string) => slugify(name)).includes(key));

// export async function getStaticPaths() {
//   const categories = await getTaxonomy(config.settings.blog_folder, "categories");
//   return categories.map((item) => {
//     const category = slugify(item);
//     return {
//       params: { category },
//       props: {
//         item,
//       },
//     };
//   });
// }

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
            <PageHeader title="Categories" slug="categories" />
            <h1 className="h2 mb-14 text-center">
              Showing posts from <span className="text-primary">{humanize(item)}</span> category
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <BlogCategories categories={Array.from(categories)} />
          <Blogs posts={filterByTags} />
        </div>
      </section>
    </>
  );
}
