import Shape from "@/components/Shape";

import PageHeader from "@/components/block/PageHeader";
import Counter from "@/components/block/about/Counter";
import Gallery from "@/components/block/about/Gallery";
import OurMembers from "@/components/block/about/OurMembers";
import Works from "@/components/block/about/Works";

import { about, counter, gallery, ourMembers, works } from "@/lib/data/about";

export default function About() {
  return (
    <>
      <Shape />

      <section className="page-hero py-16">
        <div className="container">
          <div className="page-hero-content mx-auto max-w-[768px] text-center">
            <PageHeader {...about} />
          </div>

          <Counter {...counter} />
          <Gallery {...gallery} />
          <Works {...works} />
          <OurMembers {...ourMembers} />
        </div>
      </section>
    </>
  );
}
