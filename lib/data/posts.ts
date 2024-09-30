import type { StaticImageData } from "next/image";

import Post1Image from "@/public/images/posts/post-1.png";
import Post10Image from "@/public/images/posts/post-10.png";
import Post11Image from "@/public/images/posts/post-11.png";
import Post12Image from "@/public/images/posts/post-12.png";
import Post13Image from "@/public/images/posts/post-13.png";
import Post2Image from "@/public/images/posts/post-2.png";
import Post3Image from "@/public/images/posts/post-3.png";
import Post4Image from "@/public/images/posts/post-4.png";
import Post5Image from "@/public/images/posts/post-5.png";
import Post6Image from "@/public/images/posts/post-6.png";
import Post7Image from "@/public/images/posts/post-7.png";
import Post8Image from "@/public/images/posts/post-8.png";
import Post9Image from "@/public/images/posts/post-9.png";

const subtitle = "Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet";
const content = `Laoreet mauris odio ut nec. Nisl, sed adipiscing dignissim arcu placerat ornare pharetra nec in. Ultrices in nisl potenti vitae tempus. Auctor consectetur luctus eu in amet sagittis. Dis urna, vel hendrerit convallis Senectus feugiat faucibus commodo egestas leo vitae in morbi. Enim arcu dignissim mauris, eu, eget

Pharetra odio amet pellentesque. Egestas nisi adipiscing sed in lectus. Vitae ultrices malesuada aliquet Faucibus consectetur tempus adipiscing vitae. Nec blandit tincidunt nibh nisi, quam volutpat. In lacus laoreet diam risus. Mauris, risus faucibus sagittis sagittis tincidunt id justo. Diam massa pretium consequat mauris viverra. Sagittis eu libero

<Blockquote name="Alexender Smith">
  A wise girls her limit to touch.To Repellat neque praesentium .The me an idea,
  so I as quickly To get.
</Blockquote>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec et ipsum ullamcorper venenatis fringilla. Pretium, purus eu nec vulputate vel habitant egestas. Congue ornare at ipsum, viverra. Vitae magna faucibus eros, lectus sociis. Etiam nunc amet id dignissim. Feugiat id tempor vel sit in ornare turpis posuere. Eu quisque integer non rhoncus elementum vel. Quis nec viverra lectus augue nec praesent volutpat tortor. Ipsum eget sed tempus luctus nisl. Ut etiam molestie mattis at faucibus mi at pellentesque. Pellentesque morbi nunc, curabitur arcu euismod suscipit. Duis mi sapien, nisl, pulvinar donec non dictum

Laoreet mauris odio ut nec. Nisl, sed adipiscing dignissim arcu placerat ornare pharetra nec in. Ultrices in nisl potenti vitae tempus. Auctor consectetur luctus eu in amet sagittis. Dis urna, vel hendrerit convallis cursus id.
Senectus feugiat faucibus commodo egestas leo vitae in morbi. Enim arcu dignissim mauris, eu, eget pharetra odio amet pellentesque. Egestas nisi adipiscing sed in lectus. Vitae ultrices malesuada aliquet dignissim. Faucibus non tristique eu.`;

export interface PostItem {
  title: string;
  subtitle: string;
  slug: number;
  image: StaticImageData;
  author: string;
  date: string;
  categories: Array<string>;
  featured: boolean;
  draft: boolean;
  content: string;
}

export const posts = [
  {
    slug: 5,
    title: "How Video Analytics Can Help Understand and Increase",
    subtitle,
    image: Post5Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-04T05:00:00Z",
    categories: ["development", "design"],
    featured: false,
    draft: false,
    content,
  },
  {
    slug: 6,
    title: "Keep on Top of your To-Do List With Slick New Comment",
    subtitle,
    image: Post6Image,
    author: "Al Murad Uzzaman",
    date: "2022-04-05T05:00:00Z",
    categories: ["development"],
    featured: false,
    draft: false,
    content,
  },
  {
    slug: 7,
    title: "6 Product Launch Email Examples You’ll Want to Steal",
    subtitle,
    image: Post7Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["development"],
    featured: false,
    draft: false,
    content,
  },
  {
    slug: 9,
    title: "6 Product Launch Email Examples You’ll Want to Steal",
    subtitle,
    image: Post9Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["development"],
    featured: false,
    draft: false,
    content,
  },
  {
    slug: 8,
    title: "Keep on Top of your To-Do List With Slick New Comment",
    subtitle,
    image: Post8Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["rate optimization"],
    featured: false,
    draft: false,
    content,
  },
  {
    slug: 10,
    title: "6 Product Launch Email Examples You’ll Want to Steal",
    subtitle,
    image: Post10Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["rate optimization"],
    featured: false,
    draft: false,
    content,
  },
  {
    slug: 11,
    title: "6 Product Launch Email Examples You’ll Want to Steal",
    subtitle,
    image: Post11Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["updates"],
    featured: false,
    draft: false,
    content,
  },
  {
    slug: 12,
    title: "6 Product Launch Email Examples You’ll Want to Steal",
    subtitle,
    image: Post12Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["development"],
    featured: false,
    draft: false,
    content,
  },
  {
    slug: 1,
    title: "6 Product Launch Email Examples You’ll Want to Steal",
    subtitle,
    image: Post1Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["development"],
    featured: true,
    draft: false,
    content,
  },
  {
    slug: 2,
    title: "6 Product Launch Email Examples You’ll Want to Steal",
    subtitle,
    image: Post2Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["email marketing"],
    featured: true,
    draft: false,
    content,
  },
  {
    slug: 3,
    title: "6 Product Launch Email Examples You’ll Want to Steal",
    subtitle,
    image: Post3Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["updates"],
    featured: true,
    draft: false,
    content,
  },
  {
    slug: 4,
    title: "6 Product Launch Email Examples You’ll Want to Steal",
    subtitle,
    image: Post4Image,
    author: "Abdullah Al Shifat",
    date: "2022-04-05T05:00:00Z",
    categories: ["development"],
    featured: true,
    draft: false,
    content,
  },
].toSorted(
  ({ date: a }, { date: b }) => new Date(b).getTime() - new Date(a).getTime()
) as Array<PostItem>;

export const categories = Array.from(
  posts.reduce(
    (acc, { categories }) => categories.reduce((acc, category) => acc.add(category), acc),
    new Set<string>()
  )
);

export const featureds = posts.filter(({ featured }) => featured);
