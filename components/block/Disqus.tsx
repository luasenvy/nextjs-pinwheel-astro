"use client";

import { DiscussionEmbed } from "disqus-react";
import { useEffect, useRef } from "react";

export interface DisqusProps {
  enable: boolean;
  shortname: string;
  settings?: {
    url?: string;
    identifier?: string;
    title?: string;
  };
}

export default function Disqus({ enable, shortname, settings }: DisqusProps) {
  const disqusRef = useRef<DiscussionEmbed & { cleanInstance: () => void }>(null);

  useEffect(() => {
    const disqus = disqusRef.current;
    if (!disqus) return;

    return () => {
      disqus.cleanInstance();
    };
  }, [disqusRef]);

  return (
    enable &&
    shortname && (
      <div className="row mt-16 justify-center">
        <DiscussionEmbed ref={disqusRef} shortname={shortname} config={settings ?? {}} />
      </div>
    )
  );
}
