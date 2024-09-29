export const humanize = (content: string) =>
  content
    ? content
        .replace(/^[\s_]+|[\s_]+$/g, "")
        .replace(/[_\s]+/g, " ")
        .replace(/^[a-z]/, (m) => m.toUpperCase())
    : null;

const entityList: Record<string, string> = {
  "&nbsp;": " ",
  "&lt;": "<",
  "&gt;": ">",
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
};

export const htmlEntityDecoder = (htmlWithEntities: string): string =>
  htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity: string): string => entityList[entity]
  );

export const plainify = (content: string) =>
  !content
    ? null
    : htmlEntityDecoder(content.replace(/<\/?[^>]+(>|$)/gm, "").replace(/[\r\n]\s*[\r\n]/gm, ""));
