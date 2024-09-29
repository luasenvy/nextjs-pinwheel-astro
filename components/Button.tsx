import classnames from "classnames";
import Link from "next/link";

interface ButtonProps extends React.PropsWithChildren {
  href: string;
  rel?: string;
  style?: "outline" | "solid";
}

export default function Button({ href, rel, style, children }: ButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel={`noopener noreferrer ${rel ? (rel === "follow" ? "" : rel) : "nofollow"}`}
      className={classnames("btn me-4 mb-4 border-primary hover:text-white hover:no-underline", {
        "btn-outline-primary": style === "outline",
        "btn-primary": style !== "outline",
      })}
    >
      {children}
    </Link>
  );
}
