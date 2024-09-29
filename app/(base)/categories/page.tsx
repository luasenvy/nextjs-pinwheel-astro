import BlogCategories from "@/components/BlogCategories";
import Blogs from "@/components/Blogs";
import PageHeader from "@/components/PageHeader";
import Shape from "@/components/Shape";

import posts from "@/lib/posts";

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
