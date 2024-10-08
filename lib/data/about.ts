import type { PageHeaderProps } from "@/components/block/PageHeader";
import type { CounterProps } from "@/components/block/about/Counter";
import type { GalleryProps } from "@/components/block/about/Gallery";
import type { OurMembersProps } from "@/components/block/about/OurMembers";
import type { WorksProps } from "@/components/block/about/Works";

import gallery1Image from "@/public/images/about/gallery-img-1.png";
import gallery2Image from "@/public/images/about/gallery-img-2.png";
import gallery3Image from "@/public/images/about/gallery-img-3.png";

import User1Image from "@/public/images/users/user-1.png";
import User2Image from "@/public/images/users/user-2.png";
import User3Image from "@/public/images/users/user-3.png";

export const about: PageHeaderProps = {
  title: "About",
  page_title: "About our company",
  slug: "about",
  buttons: [
    {
      label: "Download The Theme",
      link: "https://themefisher.com/products/pinwheel-astro",
      enable: true,
    },
    {
      label: "Learn More",
      link: "#",
      outline: true,
      enable: true,
    },
  ],
  content:
    "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Lorem",
};

export const gallery: GalleryProps = {
  title: "We started with one single goal Empower entrepreneurs",
  images: [gallery1Image, gallery3Image, gallery2Image],
};

export const counter: CounterProps = {
  counter: [
    { name: "Customers", number: 25, messurment: "M", color: "#A3A1FB" },
    { name: "Customers", number: 440, messurment: "M", color: "#5EE2A0" },
    { name: "Customers", number: 50, messurment: "K", color: "#FE6019" },
    { name: "Customers", number: 20, messurment: "K", color: "#FEC163" },
  ],
};

export const ourMembers: OurMembersProps = {
  members: {
    title: "This is who we are",
    description:
      "Donec sollicitudin molestie malesda. Donec sollitudin mol estie ultricies ligula sed magna dictum",
    member_list: [
      { name: "Eleanor Pena", field: "Co-founder & COO", image: User1Image },
      { name: "Bukiakta Bansalo", field: "Product Manager", image: User2Image },
      { name: "Ortrin Okaster", field: "Software Engineer", image: User3Image },
      { name: "Eleanor Pena", field: "Co-founder & COO", image: User1Image },
      { name: "Bukiakta Bansalo", field: "Product Manager", image: User2Image },
      { name: "Ortrin Okaster", field: "Software Engineer", image: User3Image },
    ],
  },
};

export const works: WorksProps = {
  features: {
    title: "The six core work\ndrive everything do",
    button: {
      label: "Download The Theme",
      link: "https://themefisher.com/products/pinwheel-astro",
      enable: true,
    },
    features_list: [
      {
        title: "Accessibility",
        content:
          "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      },
      {
        title: "Empowerement",
        content:
          "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      },
      {
        title: "Excellence",
        content:
          "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      },
      {
        title: "Innovation",
        content:
          "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      },
      {
        title: "Innovation",
        content:
          "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      },
      {
        title: "Innovation",
        content:
          "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      },
    ],
  },
};
