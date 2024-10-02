import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";

import Changelog, { metadata } from "@/lib/data/changelog/index.mdx";

export default function ChangelogPage() {
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
            <Changelog />
          </div>
        </div>
      </section>
    </>
  );
}
