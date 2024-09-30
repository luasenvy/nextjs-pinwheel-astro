import BlogSingle from "@/components/block/blog/BlogSingle";
import { type PostItem, posts } from "@/lib/data/posts";

export interface BlogViewProps {
  post: PostItem;
}

export default function BlogView({ params: { slug } }: { params: { slug: number } }) {
  return <BlogSingle post={posts.find(({ slug: _slug }) => slug == _slug)!} />;
}
