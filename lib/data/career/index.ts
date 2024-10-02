import type * as Icon from "react-feather";

import Career1, { metadata as metadata1 } from "./design-lead/index.mdx";
import Career2, { metadata as metadata2 } from "./full-stack-developer/index.mdx";
import Career3, { metadata as metadata3 } from "./head-desigin/index.mdx";
import Career4, { metadata as metadata4 } from "./head-of-inbound-marketing/index.mdx";
import Career5, { metadata as metadata5 } from "./junior-developer/index.mdx";
import Career6, { metadata as metadata6 } from "./laravel-developer/index.mdx";
import Career7, { metadata as metadata7 } from "./lead-product-designer/index.mdx";

import type { CareerBenefitsProps } from "@/components/block/career/CareerBenefits";

export const career = {
  title: "Career",
  page_title: "Career In Pinwheel",
  content:
    "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada Mauris\npellentesque nec egestas non nisi Cras",
};

export const content = {
  title: "Open positions",
  subtitle:
    "Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor amet, consectetur\nadipiscing elit. Praesent sapien massa, convallis",
};

export const careers = [
  { Component: Career1, metadata: metadata1 },
  { Component: Career2, metadata: metadata2 },
  { Component: Career3, metadata: metadata3 },
  { Component: Career4, metadata: metadata4 },
  { Component: Career5, metadata: metadata5 },
  { Component: Career6, metadata: metadata6 },
  { Component: Career7, metadata: metadata7 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .toSorted(
    ({ metadata: { date: a } }, { metadata: { date: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type CareerItem = (typeof careers)[number];

export const categories = Array.from(
  careers.reduce(
    (acc, { metadata: { categories } }) =>
      categories.reduce((acc, category) => acc.add(category), acc),
    new Set<string>()
  )
);

export const benefits: CareerBenefitsProps = {
  title: "Competitive salary",
  description:
    "Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque",
  benifit_list: [
    {
      title: "Competitive salary",
      content:
        "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      color: "#24A1FF",
      icon: "briefcase" as keyof typeof Icon,
    },
    {
      title: "100% remote",
      content:
        "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      color: "#7B5AFF",
      icon: "aperture" as keyof typeof Icon,
    },
    {
      title: "Unlimited PTO",
      content:
        "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      color: "#FDC528",
      icon: "umbrella" as keyof typeof Icon,
    },
    {
      title: "Flexible HOURS",
      content:
        "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      color: "#FF5874",
      icon: "clock" as keyof typeof Icon,
    },
    {
      title: "Medical insurance",
      content:
        "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      color: "#12E189",
      icon: "plusSquare" as keyof typeof Icon,
    },
    {
      title: "Career growth",
      content:
        "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      color: "#E545FF",
      icon: "barChart" as keyof typeof Icon,
    },
  ],
};
