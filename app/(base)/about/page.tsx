import type { CounterComponentProps } from "@/components/CounterComponent";
import CounterComponent from "@/components/CounterComponent";
import type { GalleryProps } from "@/components/Gallery";
import Gallery from "@/components/Gallery";
import type { OurMembersProps } from "@/components/OurMembers";
import OurMembers from "@/components/OurMembers";
import type { PageHeaderProps } from "@/components/PageHeader";
import PageHeader from "@/components/PageHeader";
import Shape from "@/components/Shape";
import type { WorksProps } from "@/components/Works";
import Works from "@/components/Works";

import gallery1Image from "@/public/images/about/gallery-img-1.png";
import gallery2Image from "@/public/images/about/gallery-img-2.png";
import gallery3Image from "@/public/images/about/gallery-img-3.png";

import User1Image from "@/public/images/users/user-1.png";
import User2Image from "@/public/images/users/user-2.png";
import User3Image from "@/public/images/users/user-3.png";

const about: PageHeaderProps = {
  title: "About",
  page_title: "About our company",
  slug: "about",
  buttons: [
    {
      label: "Download The Theme",
      link: "https://themefisher.com/astro-themes/pinwheel-astro",
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

const gallery: GalleryProps = {
  title: "We started with one single goal Empower entrepreneurs",
  images: [gallery1Image, gallery2Image, gallery3Image],
};

const counter: CounterComponentProps = {
  counter: [
    { name: "Customers", number: 25, messurment: "M", color: "#A3A1FB" },
    { name: "Customers", number: 440, messurment: "M", color: "#5EE2A0" },
    { name: "Customers", number: 50, messurment: "K", color: "#FE6019" },
    { name: "Customers", number: 20, messurment: "K", color: "#FEC163" },
  ],
};

const ourMembers: OurMembersProps = {
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

const works: WorksProps = {
  features: {
    title: "The six core work\ndrive everything do",
    button: {
      label: "Download The Theme",
      link: "https://themefisher.com/astro-themes/pinwheel-astro",
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

export default function About() {
  return (
    <>
      <Shape />
      <section className="page-hero py-16">
        <div className="container">
          <div className="page-hero-content mx-auto max-w-[768px] text-center">
            <PageHeader {...about} />
          </div>
          <CounterComponent {...counter} />
          <Gallery {...gallery} />
          <Works {...works} />
          <OurMembers {...ourMembers} />
        </div>
      </section>
    </>
  );
}
