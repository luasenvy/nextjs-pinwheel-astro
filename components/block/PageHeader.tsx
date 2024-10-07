import { slug as slugify } from "github-slugger";
import { parseInline } from "marked";

import Link from "@/components/ViewTransitionLink";

import { humanize } from "@/lib/textConverter";

interface HeaderItem {
  enable: boolean;
  label: string;
  link: string;
  outline?: boolean;
}

export interface PageHeaderProps {
  title?: string;
  content?: string;
  page_title?: string;
  index_title?: string;
  slug?: string;
  buttons?: Array<HeaderItem>;
}

export default function PageHeader({
  title = "",
  index_title,
  page_title,
  slug,
  content,
  buttons,
}: PageHeaderProps) {
  return (
    <div className="text-center">
      <ul className="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2">
        <li className="leading-none text-dark">
          <Link href="/" className="inline-flex items-center text-primary">
            <svg
              className="mr-1.5"
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z"
                fill="black"
              ></path>
            </svg>
            <span className="text-sm leading-none">Home</span>
          </Link>
        </li>
        <li className="leading-none text-dark">
          {index_title ? (
            <span className="text-sm leading-none">
              /{" "}
              <Link href={`/${slugify(index_title)}`} className="text-primary">
                {index_title}
              </Link>{" "}
              / {page_title ? page_title : slug ? humanize(slug.replace("page /", "")) : undefined}
            </span>
          ) : (
            <span className="text-sm leading-none">/ {title}</span>
          )}
        </li>
      </ul>

      {(() => {
        const t = page_title ? page_title : title;
        return t.split("\n").map((text, i) => (
          <h1 className="mb-5 mt-8" key={i}>
            {(parseInline(text) as string).replace("&amp;", "&")}
          </h1>
        ));
      })()}

      {content &&
        content
          .split("\n")
          .map((text, i) => <p key={i}>{(parseInline(text) as string).replace("&amp;", "&")}</p>)}

      {buttons && (
        <div className="mt-11 justify-center sm:flex">
          {buttons.map(
            ({ enable, outline, link, label }, i) =>
              enable && (
                <Link
                  key={i}
                  className={`btn m-3 block sm:inline-block ${
                    outline ? "btn-outline-primary" : "btn-primary"
                  } `}
                  href={link}
                >
                  {label}
                </Link>
              )
          )}
        </div>
      )}
    </div>
  );
}
