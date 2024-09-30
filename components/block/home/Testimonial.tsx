"use client";

import TestimonialSlider, { type SwiperWiper } from "@/components/block/home/TestimonialSlider";

export interface TestimonialProps {
  title: string;
  description: string;
  testimonial_list: Array<SwiperWiper>;
}

export default function Testimonial({ title, description, testimonial_list }: TestimonialProps) {
  return (
    <section className="reviews">
      <div className="container">
        <div className="row justify-between">
          <div className="lg:col-6">
            <h2>{title}</h2>
          </div>
          <div className="lg:col-4">
            <p>{description}</p>
          </div>
        </div>
        <div className="row mt-10">
          <div className="col-12">
            <TestimonialSlider list={testimonial_list} />
          </div>
        </div>
      </div>
    </section>
  );
}
