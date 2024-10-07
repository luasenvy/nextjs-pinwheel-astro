import Post1, { metadata as metadata1 } from "./post-1/index.mdx";
import Post10, { metadata as metadata10 } from "./post-10/index.mdx";
import Post11, { metadata as metadata11 } from "./post-11/index.mdx";
import Post12, { metadata as metadata12 } from "./post-12/index.mdx";
import Post2, { metadata as metadata2 } from "./post-2/index.mdx";
import Post3, { metadata as metadata3 } from "./post-3/index.mdx";
import Post4, { metadata as metadata4 } from "./post-4/index.mdx";
import Post5, { metadata as metadata5 } from "./post-5/index.mdx";
import Post6, { metadata as metadata6 } from "./post-6/index.mdx";
import Post7, { metadata as metadata7 } from "./post-7/index.mdx";
import Post8, { metadata as metadata8 } from "./post-8/index.mdx";
import Post9, { metadata as metadata9 } from "./post-9/index.mdx";

export const blog_folder = "blog";

export const blog = {
  title: "Blog",
};

export const pagination = 6;

export const posts = [
  { Component: Post1, metadata: metadata1 },
  { Component: Post2, metadata: metadata2 },
  { Component: Post3, metadata: metadata3 },
  { Component: Post4, metadata: metadata4 },
  { Component: Post5, metadata: metadata5 },
  { Component: Post6, metadata: metadata6 },
  { Component: Post7, metadata: metadata7 },
  { Component: Post8, metadata: metadata8 },
  { Component: Post9, metadata: metadata9 },
  { Component: Post10, metadata: metadata10 },
  { Component: Post11, metadata: metadata11 },
  { Component: Post12, metadata: metadata12 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .toSorted(
    ({ metadata: { date: a } }, { metadata: { date: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type PostItem = (typeof posts)[number];

export const categories = Array.from(
  posts.reduce(
    (acc, { metadata: { categories } }) =>
      categories.reduce((acc, category) => acc.add(category), acc),
    new Set<string>()
  )
);

export const featureds = posts.filter(({ metadata: { featured } }) => featured);
