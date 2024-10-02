import Facebook, { metadata as metadataFacebook } from "./facebook/index.mdx";
import Google, { metadata as metadataGoogle } from "./google/index.mdx";
import Pinterest, { metadata as metadataPinterest } from "./pinterest/index.mdx";
import Twitter, { metadata as metadataTwitter } from "./twitter/index.mdx";
import Webflow, { metadata as metadataWebflow } from "./webflow/index.mdx";
import Youtube, { metadata as metadataYoutube } from "./youtube/index.mdx";

export const integrations = [
  { Component: Facebook, metadata: metadataFacebook },
  { Component: Google, metadata: metadataGoogle },
  { Component: Pinterest, metadata: metadataPinterest },
  { Component: Twitter, metadata: metadataTwitter },
  { Component: Webflow, metadata: metadataWebflow },
  { Component: Youtube, metadata: metadataYoutube },
]
  .filter(({ metadata: { draft } }) => !draft)
  .toSorted(
    ({ metadata: { date: a } }, { metadata: { date: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type IntegrationItem = (typeof integrations)[number];

export const categories = Array.from(
  integrations.reduce(
    (acc, { metadata: { categories } }) =>
      categories.reduce((acc, category) => acc.add(category), acc),
    new Set<string>()
  )
);

export const integration = {
  title: "Integrations",
  page_title: "How To Integrate\nWith Pinwheel",
};
