interface FaqItem {
  title: string;
  content: string;
}

export interface FaqType {
  title: string;
  description: string;
  faq_list: Array<FaqItem>;
}

export default {
  title: "Frequently Asked Questions",
  description:
    "Vestibulum ante ipsum primis in faucibus orci luctus ultrices posuere cubilia Curae Donec",
  faq_list: [
    {
      title: "How can I integrate Avocode to my current tool stack?",
      content: `The Service is provided for free during this pilot project, and is provided "as is" with is not committed to any level of service or availability of the Service.`,
    },
    {
      title: "How can I integrate Avocode to my current tool stack?",
      content: `The Service is provided for free during this pilot project, and is provided "as is" with is not committed to any level of service or availability of the Service.`,
    },
    {
      title: "How can I integrate Avocode to my current tool stack?",
      content: `The Service is provided for free during this pilot project, and is provided "as is" with is not committed to any level of service or availability of the Service.`,
    },
    {
      title: "How can I integrate Avocode to my current tool stack?",
      content: `The Service is provided for free during this pilot availability of the Service.</br> If you enter into this agreement on behalf of a company, you hereby agree that the company is responsible under this Agreement for all actions and `,
    },
  ],
} as FaqType;
