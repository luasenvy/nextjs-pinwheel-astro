import Shape from "@/components/Shape";
import Cta from "@/components/block/Cta";
import PageHeader from "@/components/block/PageHeader";
import IntegrateMedia from "@/components/block/intergrations/IntegrateMedia";

import integrations from "@/lib/data/integrations";

const integration = {
  title: "Integrations",
  page_title: "How To Integrate\nWith Pinwheel",
};

const categories = integrations.reduce(
  (acc, { categories }) => categories.reduce((acc, category) => acc.add(category), acc),
  new Set<string>()
);

export default function IntegrationsPage() {
  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader {...integration} />
        </div>
      </section>
      <IntegrateMedia integrations={integrations} categories={Array.from(categories)} />
      <Cta />
    </>
  );
}
