import BlogSingle from "@/components/block/blog/BlogSingle";
import { posts } from "@/lib/data/posts";
import type { PostItem } from "@/lib/data/posts";

export interface BlogViewProps {
  post: PostItem;
}

export default function BlogView({ params }: { params: { no: number } }) {
  return <BlogSingle post={posts[params.no]} />;
}
