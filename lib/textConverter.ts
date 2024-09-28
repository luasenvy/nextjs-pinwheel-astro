export const humanize = (content: string) =>
  content
    ? content
        .replace(/^[\s_]+|[\s_]+$/g, "")
        .replace(/[_\s]+/g, " ")
        .replace(/^[a-z]/, (m) => m.toUpperCase())
    : null;
