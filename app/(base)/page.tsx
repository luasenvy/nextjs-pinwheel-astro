import Cta from "@/components/block/Cta";
import Banner from "@/components/block/home/Banner";
import KeyFeatures from "@/components/block/home/KeyFeatures";
import Service from "@/components/block/home/Service";
import Testimonial from "@/components/block/home/Testimonial";

import { banner, keyFeatures, service, testimonial } from "@/lib/data/home";

export default function Home() {
  return (
    <>
      <Banner {...banner} />
      <KeyFeatures {...keyFeatures} />
      <Service {...service} />
      <Testimonial {...testimonial} />
      <Cta />
    </>
  );
}
