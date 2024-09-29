import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import PricingCard from "@/components/PricingCard";
import Shape from "@/components/Shape";
import faqs from "@/lib/faqs";

import pricings from "@/lib/pricings";

const pricing = {
  title: "Pricing",
  page_title: "Pinwheel Pricing",
};

export default function PricingPage() {
  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader {...pricing} />
        </div>
      </section>
      <section className="section mt-12 pt-0">
        <div className="container">
          <div className="row lg:px-10">
            {pricings.map((item, i) => (
              <PricingCard key={`pricing-card-${i}`} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Faq {...faqs} />
    </>
  );
}
