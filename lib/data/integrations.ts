import type { StaticImageData } from "next/image";

import FacebookImage from "@/public/images/integrations/facebook.png";
import GoogleImage from "@/public/images/integrations/google.png";
import IinterestImage from "@/public/images/integrations/pinterest.png";
import TwitterImage from "@/public/images/integrations/twitter.png";
import WebflowImage from "@/public/images/integrations/webflow.png";
import YoutubeImage from "@/public/images/integrations/youtube.png";

export interface IntegrationItem {
  name: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
  categories: Array<string>;
  button: {
    label: string;
    link: string;
    draft: boolean;
  };
  slug: string;
}

const content = `#### How to connect your store with Facebook

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Donec sollicitudin

- Enhance or improve User experience, our Site, or our Service.
- Process transactions.
- Send emails about our Site or respond to inquiries.
- Send emails and updates about Conclude, including news and
  requests for agreement to amended legal documents such
- Perform any other function that we believe in good is necessary
  to protect the or proper functioning of our Site or Service.`;

export const integrations = [
  {
    name: "facebook",
    title: "Facebook Integrations",
    excerpt:
      "We are looking for a personal financial planning pro Certified Financial Planner preferred  who will lead our client advising efforts. You will be a fiduciary who works",
    image: FacebookImage,
    categories: ["social media"],
    button: {
      label: "integrate",
      link: "#",
      draft: false,
    },
    content,
  },
  {
    name: "google",
    title: "Google Integrations",
    excerpt:
      "We are looking for a personal financial planning pro Certified Financial Planner preferred  who will lead our client advising efforts. You will be a fiduciary who works",
    image: GoogleImage,
    categories: ["productivity"],
    button: {
      label: "integrate",
      link: "#",
      draft: false,
    },
    content,
  },
  {
    name: "pinterest",
    title: "Pinterest Integrations",
    excerpt:
      "We are looking for a personal financial planning pro Certified Financial Planner preferred  who will lead our client advising efforts. You will be a fiduciary who works",
    image: IinterestImage,
    categories: ["social media"],
    button: {
      label: "integrate",
      link: "#",
      draft: false,
    },
    content,
  },
  {
    name: "twitter",
    title: "Twitter Integrations",
    excerpt:
      "We are looking for a personal financial planning pro Certified Financial Planner preferred  who will lead our client advising efforts. You will be a fiduciary who works",
    image: TwitterImage,
    categories: ["social media"],
    button: {
      label: "integrate",
      link: "#",
      draft: false,
    },
    content,
  },
  {
    name: "webflow",
    title: "Webflow Integrations",
    excerpt:
      "We are looking for a personal financial planning pro Certified Financial Planner preferred  who will lead our client advising efforts. You will be a fiduciary who works",
    image: WebflowImage,
    categories: ["productivity"],
    button: {
      label: "integrate",
      link: "#",
      draft: false,
    },
    content,
  },
  {
    name: "youtube",
    title: "Youtube Integrations",
    excerpt:
      "We are looking for a personal financial planning pro Certified Financial Planner preferred  who will lead our client advising efforts. You will be a fiduciary who works",
    image: YoutubeImage,
    categories: ["streaming"],
    button: {
      label: "integrate",
      link: "#",
      draft: false,
    },
    content,
  },
].map((post, i) => ({ ...post, slug: `${i}` })) as Array<IntegrationItem>;

export const categories = Array.from(
  integrations.reduce(
    (acc, { categories }) => categories.reduce((acc, category) => acc.add(category), acc),
    new Set<string>()
  )
);
