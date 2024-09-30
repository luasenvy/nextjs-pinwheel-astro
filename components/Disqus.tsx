"use client";

import { DiscussionEmbed } from "disqus-react";

export interface DisqusProps {
  enable: boolean;
  shortname: string;
  settings?: {
    identifier: string;
    title: string;
    url: string;
  };
}

export default function Disqus({ enable, shortname, settings }: DisqusProps) {
  return (
    enable && (
      <div className="row mt-16 justify-center">
        <DiscussionEmbed shortname={shortname} config={settings ?? {}} />
      </div>
    )
  );
}
