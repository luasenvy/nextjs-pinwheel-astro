import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";

import TermAndConditions, { metadata } from "@/lib/data/terms-and-conditions/index.mdx";

export default function TermsAndConditions() {
  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader title={metadata.title} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <TermAndConditions />
          </div>
        </div>
      </section>
    </>
  );
}
