import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";
import BlogCategories from "@/components/block/blog/BlogCategories";
import Blogs from "@/components/block/blog/Blogs";

import { categories } from "@/lib/data/categories";
import { categories as postCategories, posts } from "@/lib/data/posts";

export default function CategoriesPage() {
  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader {...categories} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <BlogCategories categories={postCategories} />
          <Blogs posts={posts} />
        </div>
      </section>
    </>
  );
}
