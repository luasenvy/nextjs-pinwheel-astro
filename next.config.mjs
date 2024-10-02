import createMDX from "@next/mdx";

import remarkHeadingId from "remark-heading-id";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

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
    const trimed = file.value.trim();
    properties.push({
      type: "Property",
      method: false,
      shorthand: false,
      computed: false,
      kind: "init",
      key: { type: "Literal", value: "content" },
      value: { type: "Literal", value: trimed.substring(trimed.indexOf("\n---\n\n", 1)) },
    });

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
  };
}

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "joy1.videvo.net",
        pathname: "/videvo_files/video/free/**",
      },
    ],
  },
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
