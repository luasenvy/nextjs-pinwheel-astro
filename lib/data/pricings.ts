export interface PricingItem {
  title: string;
  pre_currency: string;
  post_currency: string;
  price: number;
  icon: string;
  description: string;
  featured: boolean;
  buttons: {
    buy_now: {
      label: string;
      link: string;
    };
    free_trial: {
      label: string;
      link: string;
    };
  };
  services: {
    title: string;
    list: Array<string>;
  };
  slug: string;
}

export const pricings = [
  {
    title: "Basic",
    pre_currency: "$",
    post_currency: "usd",
    price: 29,
    icon: "box",
    description: "Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem ipsum.",
    featured: false,
    buttons: {
      buy_now: {
        label: " Buy Now",
        link: "#",
      },
      free_trial: {
        label: "Start Free trial",
        link: "#",
      },
    },
    services: {
      title: "What's included?",
      list: [
        "Track Reward Part Program",
        "Design and prototype powerful",
        "Keep work in unlimited storage",
        "Add people document handoff.",
      ],
    },
  },

  {
    title: "Enterprise",
    pre_currency: "$",
    post_currency: "usd",
    price: 59,
    icon: "table",
    description: "Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem ipsum.",
    featured: true,
    buttons: {
      buy_now: {
        label: "Buy Now",
        link: "#",
      },
      free_trial: {
        label: "Start Free trial",
        link: "#",
      },
    },
    services: {
      title: "What's included?",
      list: [
        "Track Reward Part Program",
        "Design and prototype powerful",
        "Keep work in unlimited storage",
        "Add people document handoff.",
      ],
    },
  },
  {
    title: "Pro Lite",
    pre_currency: "$",
    post_currency: "usd",
    price: 99,
    icon: "briefcase",
    description: "Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem ipsum.",
    featured: false,
    buttons: {
      buy_now: {
        label: "Buy Now",
        link: "#",
      },
      free_trial: {
        label: "Start Free trial",
        link: "#",
      },
    },
    services: {
      title: "What's included?",
      list: [
        "Track Reward Part Program",
        "Design and prototype powerful",
        "Keep work in unlimited storage",
        "Add people document handoff.",
      ],
    },
  },
].map((post, i) => ({ ...post, slug: `${i}` })) as Array<PricingItem>;
