import Logo from "@/components/Logo";
import Social, { type IconName } from "@/components/Social";
import Link from "@/components/ViewTransitionLink";

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
            Copyright &copy; 2023 a theme by{" "}
            <Link href="https://themefisher.com" target="_blank">
              Themefisher
            </Link>{" "}
            &amp; writed nextjs by{" "}
            <Link href="https://www.luas.kr" target="_blank">
              luasenvy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
