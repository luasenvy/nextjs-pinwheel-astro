import Image from "next/image";
import type * as Icon from "react-feather";

import type { CareerBenefitsProps } from "@/components/CareerBenefits";
import CareerBenefits from "@/components/CareerBenefits";
import JobPosts from "@/components/JobPosts";
import PageHeader from "@/components/PageHeader";
import Shape from "@/components/Shape";

import Cta from "@/components/partials/Cta";

import careers from "@/lib/careers";
import CarrerHeroImage from "@/public/images/career/career-hero-image.png";

const categories = careers.reduce(
  (acc, { categories }) => categories.reduce((acc, category) => acc.add(category), acc),
  new Set<string>()
);

const career = {
  title: "Career",
  page_title: "Career In Pinwheel",
  content:
    "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada Mauris\npellentesque nec egestas non nisi Cras",
};

const careerContent = {
  title: "Open positions",
  subtitle:
    "Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor amet, consectetur\nadipiscing elit. Praesent sapien massa, convallis",
};

const benefits: CareerBenefitsProps = {
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

export default function CareerPage() {
  return (
    <>
      <Shape />

      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader {...career} />
          <div className="col-12 mt-14">
            <div className="relative">
              <Image
                src={CarrerHeroImage}
                alt=""
                height={532}
                width={1044}
                className="w-full rounded"
              />
              <Image
                className="lg:h-[150px] lg:w-[150px] absolute -left-[8%] bottom-[12%] z-[-1] h-20 w-20 -rotate-90 lg:-left-8 lg:bottom-4"
                src="/images/shape.png"
                height={130}
                width={130}
                alt=""
              />
              <Image
                className="absolute -bottom-4 -right-4 z-[-1] h-16 w-16 -rotate-90"
                src="/images/shape.png"
                alt=""
                height={64}
                width={64}
              />
            </div>
          </div>
        </div>
      </section>
      <CareerBenefits {...benefits} />
      <JobPosts categories={Array.from(categories)} career={careerContent} posts={careers} />
      <Cta />
    </>
  );
}
