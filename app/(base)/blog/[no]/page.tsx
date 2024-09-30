import BlogSingle from "@/components/BlogSingle";
import posts from "@/lib/posts";
import type { PostItem } from "@/lib/posts";

export interface BlogViewProps {
  post: PostItem;
}

export default function BlogView({ params }: { params: { no: number } }) {
  return <BlogSingle post={posts[params.no]} />;
}
