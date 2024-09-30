"use client";

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";

import Logo from "@/components/Logo";

const main = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Features", url: "/features" },
  { name: "How It Works", url: "/how-it-works" },
  {
    name: "Pages",
    url: "",
    hasChildren: true,
    children: [
      { name: "Career", url: "/career" },
      { name: "Integrations", url: "/integrations" },
      { name: "Pricing", url: "/pricing" },
      { name: "Sign In", url: "/signin" },
      { name: "Sign Up", url: "/signup" },
      { name: "Elements", url: "/elements" },
      { name: "Changelog", url: "/changelog" },
      { name: "Terms And Conditions", url: "/terms-and-conditions" },
    ],
  },
  { name: "Contact", url: "/contact" },
];

export interface ChildNavigationLink {
  name: string;
  url: string;
}

export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLHeadElement>(null);
  const [showMobile, setShowMobile] = useState<boolean>(false);

  const [dropdownHidden, setDropdownHidden] = useState<boolean>(true);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 0) return header.classList.add("header-sticky");
      header.classList.remove("header-sticky");
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);

  return (
    <header ref={headerRef} className="header">
      <nav className="navbar container">
        <div className="order-0">
          <Logo />
        </div>
        <input
          id="nav-toggle"
          type="checkbox"
          className="hidden"
          checked={showMobile}
          onChange={(e) => setShowMobile(e.currentTarget.checked)}
        />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="order-2 flex cursor-pointer items-center lg:order-1 lg:hidden"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label>
        <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="order-2 hidden cursor-pointer items-center lg:order-1"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full lg:order-1 lg:flex lg:w-auto lg:space-x-2"
        >
          {main.map((menu, i) =>
            menu.hasChildren ? (
              <li
                key={`nav-item-${i}`}
                className="nav-item nav-dropdown group relative cursor-pointer dropdown-button"
                onClick={() => setDropdownHidden((prev) => !prev)}
              >
                <span
                  className={classnames("nav-link inline-flex items-center", {
                    active:
                      menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children?.map(({ url }) => `${url}/`).includes(pathname),
                  })}
                >
                  {menu.name}
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
                <ul
                  id="dropdown"
                  className={classnames(
                    "nav-dropdown-list mx-auto duration-300 lg:invisible lg:absolute lg:block lg:h-auto lg:w-[13.5rem] lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100",
                    { hidden: !dropdownHidden }
                  )}
                >
                  {menu.children?.map((child, i) => (
                    <li key={`nav-item-child-${i}`} className="nav-dropdown-item">
                      <Link
                        href={child.url}
                        className={classnames("nav-dropdown-link block", {
                          "text-primary": pathname === `${child.url}/` || pathname === child.url,
                        })}
                        onClick={(e) => setShowMobile(false)}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={`nav-item-other-${i}`} className="nav-item">
                <Link
                  href={menu.url}
                  className={classnames("nav-link inline-block lg:block", {
                    active: pathname === `${menu.url}/` || pathname === menu.url,
                  })}
                  onClick={(e) => setShowMobile(false)}
                >
                  {menu.name}
                </Link>
              </li>
            )
          )}
          <li className="nav-item mt-2 lg:hidden">
            <Link className="btn btn-white btn-sm border-border" href="/signin">
              Sing Up Now
            </Link>
          </li>
        </ul>
        <div className="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex">
          <Link className="btn btn-white btn-sm" href="/signin">
            {" "}
            Sing Up Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
