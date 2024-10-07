import BlogSingle from "@/components/block/blog/BlogSingle";
import { type PostItem, posts } from "@/lib/data/blog";

export interface BlogViewProps {
  post: PostItem;
}

export default function BlogView({ params: { slug } }: { params: { slug: string } }) {
  return <BlogSingle post={posts.find(({ metadata: { slug: _slug } }) => slug == _slug)!} />;
}
