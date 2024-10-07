"use client";

import { useParams } from "next/navigation";

import Pagination from "@/components/Pagination";
import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";
import Blogs from "@/components/block/blog/Blogs";
import { blog_folder, pagination, posts } from "@/lib/data/blog";

export default function BlogPaginationPage() {
  const { page } = useParams();

  const recentPost = posts.filter(({ metadata }) => !metadata.featured);
  const totalPages = Math.ceil(recentPost.length / pagination);

  const currentPage = page && !isNaN(Number(page)) ? Number(page) : 1;
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const currentPosts = recentPost.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Shape />
      <section className="page-hero pt-16">
        <div className="container">
          <PageHeader index_title="Blog" slug={`page / ${page}`} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="h4 mb-4">Recent Posts</h2>
          <Blogs posts={currentPosts} />
          <Pagination section={blog_folder} totalPages={totalPages} currentPage={currentPage} />
        </div>
      </section>
    </>
  );
}
