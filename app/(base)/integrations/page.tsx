"use client";

import Shape from "@/components/Shape";
import Cta from "@/components/block/Cta";
import PageHeader from "@/components/block/PageHeader";
import IntegrateMedia from "@/components/block/intergrations/IntegrateMedia";

import { categories, integration, integrations } from "@/lib/data/integration";

export default function IntegrationsPage() {
  return (
    <>
      <Shape />

      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader {...integration} />
        </div>
      </section>

      <IntegrateMedia integrations={integrations} categories={categories} />

      <Cta />
    </>
  );
}
