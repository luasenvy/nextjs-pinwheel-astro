import type { StaticImageData } from "next/image";

const excerpt =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam lorem amet eget in netus laoreet";
const content = `### What Is the role?

We are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. You will be a fiduciary who works with clients providing holistic advice on areas including: saving, retirement, debt management, investments. You’ll be on the front lines helping clients in what is arguably the most important position at the company.

### About you

We are especially interested in finding developers with experience either building web APIs with Go or experience with functional programming (e.g. Elixir, NodeJS, Clojure, F#). You might not have experience with all the technologies in our stack, but you are motivated to learn deeply. You will get the opportunity to work with both Go and Elixir with experienced team mates who can teach and pair with you to learn whatever you have less experience with.You care about security, code quality, scalability, performance, and simplicity. Above all, you seek operational excellence and apply the best engineering practices possible. Not everything that you or your team do can be perfect, but you make sure that you always know the trade-offs.

### Your Role

Users of Conclude

1. must keep passwords secure and confidential;
2. are solely responsible for User Data and all activity in their account while using the Service;
3. must use commercially reasonable efforts to prevent unauthorized access to their account, and notify Conclude promptly of any such unauthorized access; and
4. may use the Service only in accordance with Conclude's online user guide and all applicable laws and regulations.

### Responsibilities

- Enhance or improve User experience, our Site, or our Service.
- Process transactions.
- Send emails about our Site or respond to inquiries.
- As this Privacy Policy and our Terms of Service.

### Requirements

We are looking for a personal financial planning pro (Certified Financial Planner™ preferred) who will lead our client advising efforts. You will be a fiduciary who works with clients providing holistic advice on areas including: saving, retirement, debt

### We offer you

- Enhance or improve User experience, our Site, or our Service.
- Process transactions requests for agreement.
- Send emails about our Site or respond to inquiries.
- Send emails and updates about Conclude, including news and requests for agreement to amended legal documents such.
- As this Privacy Policy and our Terms of Service.`;

export interface CareerItem {
  title: string;
  excerpt: string;
  job_nature: string;
  location: string;
  categories: Array<string>;
  date: string;
  slug: string;
  draft: boolean;
  content?: string;
  image?: StaticImageData;
  color: string;
}

export default [
  {
    title: "Design Lead",
    excerpt,
    job_nature: "Full Time",
    location: "San Francisco",
    categories: ["designer"],
    date: "2021-07-11",
    draft: false,
    color: "#24A1FF",
    content,
  },
  {
    title: "Full-Stack Developer",
    excerpt,
    job_nature: "Full Time",
    location: "San Francisco",
    categories: ["developer"],
    date: "2021-07-10",
    draft: false,
    color: "#7B5AFF",
    content,
  },
  {
    title: "Head Design",
    excerpt,
    job_nature: "Full Time",
    location: "San Francisco",
    categories: ["developer"],
    date: "2021-07-13",
    draft: false,
    color: "#FDC528",
    content,
  },
  {
    title: "Head of Inbound Marketing",
    excerpt,
    job_nature: "Full Time",
    location: "San Francisco",
    categories: ["marketing"],
    date: "2021-07-12",
    draft: false,
    color: "#FF5874",
    content,
  },
  {
    title: "Junior Developer",
    excerpt,
    job_nature: "Full Time",
    location: "San Francisco",
    categories: ["developer"],
    date: "2021-07-08",
    draft: false,
    color: "#12E189",
    content,
  },
  {
    title: "Laravel Developer",
    excerpt,
    job_nature: "Full Time",
    location: "San Francisco",
    categories: ["developer"],
    date: "2021-07-14",
    draft: false,
    color: "#E545FF",
    content,
  },
  {
    title: "Lead Product Designer",
    excerpt,
    job_nature: "Full Time",
    location: "San Francisco",
    categories: ["designer"],
    date: "2021-07-09",
    draft: false,
    content,
  },
].map((post, i) => ({ ...post, slug: `${i}` })) as Array<CareerItem>;
