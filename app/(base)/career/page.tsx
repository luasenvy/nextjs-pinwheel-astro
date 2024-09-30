import Image from "next/image";

import Shape from "@/components/Shape";

import Cta from "@/components/block/Cta";
import PageHeader from "@/components/block/PageHeader";
import CareerBenefits from "@/components/block/career/CareerBenefits";
import JobPosts from "@/components/block/career/JobPosts";

import { career, content as careerContent } from "@/lib/data/career";
import { benefits, careers, categories } from "@/lib/data/careers";
import CarrerHeroImage from "@/public/images/career/career-hero-image.png";
import ShapeImage from "@/public/images/shape.png";

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
                src={ShapeImage}
                height={130}
                width={130}
                alt=""
              />
              <Image
                className="absolute -bottom-4 -right-4 z-[-1] h-16 w-16 -rotate-90"
                src={ShapeImage}
                alt=""
                height={64}
                width={64}
              />
            </div>
          </div>
        </div>
      </section>
      <CareerBenefits {...benefits} />
      <JobPosts categories={categories} career={careerContent} posts={careers} />
      <Cta />
    </>
  );
}
