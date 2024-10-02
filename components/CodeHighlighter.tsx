"use client";

import { highlightAllUnder } from "prismjs";

import { useEffect, useRef } from "react";
import "prismjs/themes/prism-twilight.css";

export default function CodeHighlighter({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    highlightAllUnder(contentRef.current);
  }, [contentRef]);

  return (
    <div ref={contentRef} {...props}>
      {children}
    </div>
  );
}
