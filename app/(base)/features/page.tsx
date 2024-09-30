import Shape from "@/components/Shape";
import Cta from "@/components/block/Cta";
import FeatureBanner from "@/components/block/features/FeatureBanner";
import ProjecManagement from "@/components/block/features/ProjecManagement";

import { featureBanner, features } from "@/lib/data/features";

export default function Features() {
  return (
    <>
      <Shape />
      <FeatureBanner {...featureBanner} />
      <ProjecManagement {...features} />
      <Cta />
    </>
  );
}
