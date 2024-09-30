import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";
import BlogCategories from "@/components/block/blog/BlogCategories";
import Blogs from "@/components/block/blog/Blogs";

import posts from "@/lib/data/posts";

const categories = posts.reduce(
  (acc, { categories }) => categories.reduce((acc, category) => acc.add(category), acc),
  new Set<string>()
);

export default function CategoriesPage() {
  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader title="Categories" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <BlogCategories categories={Array.from(categories)} />
          <Blogs posts={posts} />
        </div>
      </section>
    </>
  );
}
