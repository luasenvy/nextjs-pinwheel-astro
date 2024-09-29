import { parseInline } from "marked";

import Link from "next/link";

import Logo from "@/components/Logo";
import Social, { type IconName, type SocialProps } from "@/components/Social";

const footer = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "Elements",
    url: "/elements",
  },
  {
    name: "Changelog",
    url: "/changelog",
  },
];

const social: Record<IconName, string> = {
  facebook: "https://facebook.com/",
  twitter: "https://twitter.com/",
  instagram: "",
  youtube: "",
  mastodon: "",
  linkedin: "https://linkedin.com/",
  github: "",
  gitlab: "",
  medium: "",
  codepen: "",
  bitbucket: "",
  dribbble: "",
  behance: "",
  pinterest: "",
  soundcloud: "",
  tumblr: "",
  reddit: "",
  vk: "",
  whatsapp: "",
  snapchat: "",
  vimeo: "",
  tiktok: "",
  foursquare: "",
  rss: "",
  email: "",
  phone: "",
  address: "",
  skype: "https://skype.com/",
  website: "",
  discord: "",
  slack: "",
};

const footerDescription =
  "Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo tellus, sed condimentum volutpat.";
const email = "info@andromeda.io";
const location = "2118 Thornridge Cir. Syracuse, Connecticut 35624";
const phone = "+704-555-0127";
const copyright = "Copyright © 2023 a theme by [Themefisher](https://themefisher.com)";

export default function Footer() {
  return (
    <footer className="footer bg-[#F1F1F1]">
      <div className="container">
        <div className="gx-5 row pb-10 pt-[52px]">
          <div className="col-12 mt-12 md:col-6 lg:col-3">
            <Logo />
            <p className="mt-6">{footerDescription}</p>
          </div>
          <div className="col-12 mt-12 md:col-6 lg:col-3">
            <h6>Socials</h6>

            <Social source={social} className="social-icons mt-4 lg:mt-6" />
          </div>
          <div className="col-12 mt-12 md:col-6 lg:col-3">
            <h6>Quick Links</h6>
            <ul>
              {footer.map((item, i) => (
                <li key={i} className={footer.length - 1 === i ? "mb-0" : "mb-4"}>
                  <Link className="hover:text-primary hover:underline" href={item.url}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 mt-12 md:col-6 lg:col-3">
            <h6>Location & Contact</h6>
            <ul>
              <li className="mb-2">{location}</li>
              <li className="mb-2">
                <Link className="mb-2 hover:text-primary" href={`mailto:${email}`}>
                  {email}
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary hover:underline" href={`tel:${phone}`}>
                  {phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container max-w-[1440px]">
        <div className="footer-copyright mx-auto border-t border-border pb-10 pt-7 text-center">
          <p className="content text-text">
            {(parseInline(copyright) as string).replace("&amp;", "&")}
          </p>
        </div>
      </div>
    </footer>
  );
}
