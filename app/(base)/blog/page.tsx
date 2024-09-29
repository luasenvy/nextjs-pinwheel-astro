import BlogCategories from "@/components/BlogCategories";
import Blogs from "@/components/Blogs";
import FeaturedBlog from "@/components/FeaturedBlog";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import Shape from "@/components/Shape";

import Cta from "@/components/partials/Cta";
import posts from "@/lib/posts";

const blog_folder = "blog";
const pagination = 6;
const blog = {
  title: "Blog",
  page_title: "Insight and advice from\nour expert team.",
};

const categories = posts.reduce(
  (acc, { categories }) => categories.reduce((acc, category) => acc.add(category), acc),
  new Set<string>()
);

export default function BlogPage() {
  const sortedPosts = posts.toSorted(
    ({ date: a }, { date: b }) => new Date(b).getTime() - new Date(a).getTime()
  );

  const currentPosts = sortedPosts.slice(0, pagination);
  const totalPages = Math.ceil(posts.length / pagination);
  const featuredPosts = sortedPosts.filter(({ featured }) => featured);

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
          <FeaturedBlog posts={featuredPosts} />
          <BlogCategories categories={Array.from(categories)} />
          <h2 className="h4 mb-4">Recent Posts</h2>
          <Blogs posts={currentPosts} />
          <Pagination section={blog_folder} currentPage={1} totalPages={totalPages} />
        </div>
      </section>
      <Cta />
    </>
  );
}
