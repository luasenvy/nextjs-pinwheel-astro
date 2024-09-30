import Cta from "@/components/block/Cta";
import Banner, { type BannerProps } from "@/components/block/home/Banner";
import KeyFeatures, { type KeyFeaturesProps } from "@/components/block/home/KeyFeatures";
import Service, { type ServiceProps } from "@/components/block/home/Service";
import Testimonial, { type TestimonialProps } from "@/components/block/home/Testimonial";

import BannerImage from "@/public/images/banner-img.png";

import CollaborationImage from "@/public/images/collaboration.png";
import IntroThumbnailImage from "@/public/images/intro-thumbnail.png";
import sellsByCountryImage from "@/public/images/sells-by-country.png";

import User1Image from "@/public/images/users/user-1.png";
import User2Image from "@/public/images/users/user-2.png";
import User3Image from "@/public/images/users/user-3.png";
import User4Image from "@/public/images/users/user-4.png";
import User5Image from "@/public/images/users/user-5.png";
import User6Image from "@/public/images/users/user-6.png";

const banner: BannerProps = {
  title: "Scale design & dev operations with Avocode Enterprise",
  content:
    "A fully integrated suite of authentication & authoriz products, Stytch’s platform removes the headache of.",
  image: BannerImage,
  button: {
    label: "Download The Theme",
    link: "https://themefisher.com/astro-themes/pinwheel-astro",
    enable: true,
  },
};

const keyFeatures: KeyFeaturesProps = {
  title: "The Highlighting Part Of Our Solution",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.",
  featureList: [
    {
      icon: "map",
      title: "Live Caption",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "lock",
      title: "Smart Reply",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "link",
      title: "Sound Amplifier",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "bell",
      title: "Sound Amplifier",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "monitor",
      title: "Smart Reply",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "map",
      title: "Live Caption",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "link",
      title: "Sound Amplifier",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "bell",
      title: "Sound Amplifier",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "map",
      title: "Smart Reply",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "monitor",
      title: "Live Caption",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const service: ServiceProps = {
  homepage_tab: {
    title: "Prevent failure from to impacting your reputation",
    description:
      "Our platform helps you build secure onboarding authentication experiences that retain and engage your users. We build the infrastructure, you can.",
    tab_list: [
      { title: "Habit building essential choose habit", icon: "lock", image: sellsByCountryImage },
      { title: "Get an overview of Habit Calendars.", icon: "clock", image: CollaborationImage },
      { title: "Start building with Habitify platform", icon: "bell", image: sellsByCountryImage },
    ],
  },
  our_service: [
    {
      title: "Accept payments any country in this whole universe",
      description:
        "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies ligula sed",
      image: CollaborationImage,
      list: [
        "Supporting more than 119 country world",
        "Open transaction with more than currencies",
        "Customer Service with 79 languages",
      ],
    },
    {
      title: "Accountability that works for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.",
      video: {
        thumbnail: IntroThumbnailImage,
        video_id: "g3-VxLQO7do",
      },
      button: {
        label: "Know About Us",
        link: "#",
        enable: true,
      },
    },
  ],
};

const testimonial: TestimonialProps = {
  title: "Our customers have nice things to say about us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.",
  testimonial_list: [
    {
      author: "David Cameron",
      avatar: User5Image,
      organization: "meta limited",
      rating: "four",
      content:
        "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
    },
    {
      author: "David Cameron",
      avatar: User6Image,
      organization: "meta limited",
      rating: "four",
      content:
        "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
    },
    {
      author: "David Cameron",
      avatar: User2Image,
      organization: "meta limited",
      rating: "three",
      content:
        "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
    },
    {
      author: "David Cameron",
      avatar: User3Image,
      organization: "meta limited",
      rating: "five",
      content:
        "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
    },
    {
      author: "David Cameron",
      avatar: User4Image,
      organization: "meta limited",
      rating: "five",
      content:
        "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
    },
    {
      author: "David Cameron",
      avatar: User1Image,
      organization: "meta limited",
      rating: "three",
      content:
        "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
    },
    {
      author: "David Cameron",
      avatar: User5Image,
      organization: "meta limited",
      rating: "five",
      content:
        "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
    },
    {
      author: "David Cameron",
      avatar: User5Image,
      organization: "meta limited",
      rating: "five",
      content:
        "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
    },
    {
      author: "David Cameron",
      avatar: User5Image,
      organization: "meta limited",
      rating: "five",
      content:
        "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Banner {...banner} />
      <KeyFeatures {...keyFeatures} />
      <Service {...service} />
      <Testimonial {...testimonial} />
      <Cta />
    </>
  );
}
