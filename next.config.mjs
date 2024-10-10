import createMDX from "@next/mdx";

import remarkHeadingId from "remark-heading-id";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const separator = "\n---\n\n";

function cleanContent(str) {
  const trimed = str.trim();
  return trimed
    .substring(trimed.indexOf(separator) + separator.length)
    .replace(/^import [^\s]+ from [^\n]+\n/gm, "");
}

function extendsMetadataContent() {
  return (ast, file) => {
    const metadata = ast.children.find(({ type }) => "mdxjsEsm" === type);
    if (!metadata) return;

    const [
      {
        declaration: {
          declarations: [
            {
              init: { properties },
            },
          ],
        },
      },
    ] = metadata.data.estree.body;

    const {
      value: { value: title },
    } = properties.find(({ key }) => "title" === key.value);
    properties.push({
      type: "Property",
      method: false,
      shorthand: false,
      computed: false,
      kind: "init",
      key: { type: "Literal", value: "slug" },
      value: {
        type: "Literal",
        value: encodeURIComponent(title.replace(/[^\d\w]/g, "-").toLowerCase()),
      },
    });

    properties.push({
      type: "Property",
      method: false,
      shorthand: false,
      computed: false,
      kind: "init",
      key: { type: "Literal", value: "content" },
      value: { type: "Literal", value: cleanContent(file.value) },
    });
  };
}

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      [remarkHeadingId, { defaults: true, uniqueDefaults: false }],
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "metadata" }],
      extendsMetadataContent,
    ],
  },
});

export default withMDX(nextConfig);
