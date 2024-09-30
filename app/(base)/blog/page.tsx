import Pagination from "@/components/Pagination";
import Shape from "@/components/Shape";
import Cta from "@/components/block/Cta";
import PageHeader from "@/components/block/PageHeader";
import BlogCategories from "@/components/block/blog/BlogCategories";
import Blogs from "@/components/block/blog/Blogs";
import FeaturedBlog from "@/components/block/blog/FeaturedBlog";

import { blog, blog_folder, pagination } from "@/lib/data/blog";
import { categories, featureds, posts } from "@/lib/data/posts";

export default function BlogPage() {
  const currentPosts = posts.slice(0, pagination);
  const totalPages = Math.ceil(posts.length / pagination);

  return (
    <>
      <Shape />
      <section className="page-hero pt-16">
        <div className="container">
          <PageHeader {...blog} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FeaturedBlog posts={featureds} />
          <BlogCategories categories={categories} />
          <h2 className="h4 mb-4">Recent Posts</h2>
          <Blogs posts={currentPosts} />
          <Pagination section={blog_folder} currentPage={1} totalPages={totalPages} />
        </div>
      </section>
      <Cta />
    </>
  );
}
