import type { FeatureBannerProps } from "@/components/block/features/FeatureBanner";
import type { ProjectManagementProps } from "@/components/block/features/ProjecManagement";

import FeatureImage1 from "@/public/images/features/feature-img-1.png";
import FeatureImage2 from "@/public/images/features/feature-img-2.png";
import FeaturesBannerImage from "@/public/images/features-banner-img.png";

export const featureBanner: FeatureBannerProps = {
  title: "Features",
  banner: {
    title: "Connects with all your other tools to create a smooth experience.",
    content:
      "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta.",
    image: FeaturesBannerImage,
    button: {
      label: "Download The Theme",
      link: "https://themefisher.com/products/pinwheel-astro",
      enable: true,
    },
  },
};

export const features: ProjectManagementProps = {
  title: "Build collaborative workspaces\nfor your team",
  content:
    "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada.\nMauris pellentesque nec, egestas non nisi. Cras ultricies .",
  management: {
    title: "Project Management",
    projects: [
      {
        title: "Reduce friction",
        content: "Encourage frequent & timely recognition integrating with communication tools",
        icon: "lock",
      },
      {
        title: "Reduce friction",
        content: "Encourage frequent & timely recognition integrating with communication tools",
        icon: "tv",
      },
      {
        title: "Reduce friction",
        content: "Encourage frequent & timely recognition integrating with communication tools",
        icon: "tool",
      },
      {
        title: "Reduce friction",
        content: "Encourage frequent & timely recognition integrating with communication tools",
        icon: "lock",
      },
      {
        title: "Reduce friction",
        content: "Encourage frequent & timely recognition integrating with communication tools",
        icon: "tv",
      },
      {
        title: "Reduce friction",
        content: "Encourage frequent & timely recognition integrating with communication tools",
        icon: "tool",
      },
    ],
  },
  feature_service: {
    title: "Accept payments from devices any country in this universe",
    description:
      "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies ligula sed",
    image: FeatureImage1,
    list: [
      "Supporting more than 119 country world",
      "Open transaction with more than currencies",
      "Customer Service with 79 languages",
    ],
    buttons: [
      {
        label: "Download The Theme",
        link: "https://themefisher.com/products/pinwheel-astro",
        enable: true,
      },
      { label: "Learn More", link: "#", outline: true, enable: true },
    ],
  },
  feature_tab: {
    title: "Payment gateway for every stage\nof your business growth",
    list: [
      {
        title: "Transaction from Anyone with\na world to Anywhere",
        content:
          "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies ligula sed",
        image: FeatureImage2,
      },
      {
        title: "Integrate Checkout with Process Smoothly",
        content:
          "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies ligula sed",
        image: FeatureImage1,
      },
      {
        title: "Transaction from Anyone with\na world to Anywhere",
        content:
          "Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies ligula sed",
        image: FeatureImage2,
      },
    ],
  },
};
