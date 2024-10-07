import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoCodepen,
  IoLogoDiscord,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMastodon,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMail,
} from "react-icons/io5";

import Link from "@/components/ViewTransitionLink";

export type IconName =
  | "facebook"
  | "twitter"
  | "mastodon"
  | "instagram"
  | "youtube"
  | "linkedin"
  | "github"
  | "gitlab"
  | "discord"
  | "slack"
  | "medium"
  | "codepen"
  | "bitbucket"
  | "dribbble"
  | "behance"
  | "pinterest"
  | "soundcloud"
  | "tumblr"
  | "reddit"
  | "vk"
  | "whatsapp"
  | "snapchat"
  | "vimeo"
  | "tiktok"
  | "foursquare"
  | "rss"
  | "email"
  | "phone"
  | "address"
  | "skype"
  | "website";

const Icons: Record<IconName, React.ReactNode> = {
  facebook: <IoLogoFacebook />,
  twitter: <IoLogoTwitter />,
  mastodon: <IoLogoMastodon />,
  instagram: <IoLogoInstagram />,
  youtube: <IoLogoYoutube />,
  linkedin: <IoLogoLinkedin />,
  github: <IoLogoGithub />,
  gitlab: <IoLogoGitlab />,
  discord: <IoLogoDiscord />,
  slack: <IoLogoSlack />,
  medium: <IoLogoMedium />,
  codepen: <IoLogoCodepen />,
  bitbucket: <IoLogoBitbucket />,
  dribbble: <IoLogoDribbble />,
  behance: <IoLogoBehance />,
  pinterest: <IoLogoPinterest />,
  soundcloud: <IoLogoSoundcloud />,
  tumblr: <IoLogoTumblr />,
  reddit: <IoLogoReddit />,
  vk: <IoLogoVk />,
  whatsapp: <IoLogoWhatsapp />,
  snapchat: <IoLogoSnapchat />,
  vimeo: <IoLogoVimeo />,
  tiktok: <IoLogoTiktok />,
  foursquare: <IoLogoFoursquare />,
  rss: <IoLogoRss />,
  email: <IoMail />,
  phone: <IoCall />,
  address: <IoLocation />,
  skype: <IoLogoSkype />,
  website: <IoGlobeOutline />,
};

export interface SocialProps extends React.HTMLAttributes<HTMLUListElement> {
  source: Record<keyof typeof Icons, string>;
}

export default function Social({ source, ...props }: SocialProps) {
  return (
    <ul {...props}>
      {Object.entries(source)
        .filter(([, href]) => Boolean(href))
        .map(([icon, href], i) => (
          <li key={i} className="inline-block">
            <Link aria-label={icon} href={href} target="_blank" rel="noopener noreferrer nofollow">
              {Icons[icon as keyof typeof Icons]}
            </Link>
          </li>
        ))}
    </ul>
  );
}
