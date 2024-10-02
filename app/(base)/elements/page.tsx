// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

import CodeHighlighter from "@/components/CodeHighlighter";
import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";

import Elements, { metadata } from "@/lib/data/elements/index.mdx";

export default function ElementsPage() {
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
          <CodeHighlighter className="content">
            <Elements />
          </CodeHighlighter>
        </div>
      </section>
    </>
  );
}
