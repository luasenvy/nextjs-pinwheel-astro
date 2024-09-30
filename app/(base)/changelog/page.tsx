import Link from "next/link";

import Badge from "@/components/Badge";
import Shape from "@/components/Shape";
import PageHeader from "@/components/block/PageHeader";
import ChangelogCard from "@/components/block/changelog/ChangelogCard";

const changelog = {
  title: "Changelog",
};

export default function ChangelogPage() {
  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader {...changelog} />
        </div>
      </section>

      <ChangelogCard date="v1.0.4 (January 19,2020)">
        <Badge type="changed">changed</Badge>

        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            Enhance or improve{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              User experience
            </Link>
            , our Site, or our Service.
          </li>
          <li>Process transactions.</li>
          <li>
            Send emails about our{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            Send emails and updates about Conclude, including news and requests for agreement to
            amended{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              legal documents
            </Link>{" "}
            such
          </li>
          <li>
            Perform any other function that we believe in
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
        </ul>

        <Badge type="added">added</Badge>

        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            {" "}
            Including about Conclude{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            {" "}
            Function that we believe in{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
          <li> News and requests for agreement Process transactions.</li>
        </ul>
        <p>
          This is the start of dummy description text. You can change it whenever you want. This is
          the start of dummy description text. You can change it whenever you want.
        </p>
      </ChangelogCard>

      <ChangelogCard date="v1.0.3 (October 23,2019)">
        <Badge type="changed">changed</Badge>

        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            Enhance or improve{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              User experience
            </Link>
            , our Site, or our Service.
          </li>
          <li>Process transactions.</li>
          <li>
            Send emails about our{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            Send emails and updates about Conclude, including news and requests for agreement to
            amended{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              legal documents
            </Link>{" "}
            such
          </li>
          <li>
            Perform any other function that we believe in
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
        </ul>
        <Badge type="added">added</Badge>
        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            Including about Conclude{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            Function that we believe in{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
          <li>News and requests for agreement Process transactions.</li>
        </ul>
      </ChangelogCard>

      <ChangelogCard date="v1.0.2 (May 19,2019)">
        <Badge type="changed">changed</Badge>

        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            Enhance or improve{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              User experience
            </Link>
            , our Site, or our Service.
          </li>
          <li>Process transactions.</li>
          <li>
            Send emails about our{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            Send emails and updates about Conclude, including news and requests for agreement to
            amended{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              legal documents
            </Link>{" "}
            such
          </li>
          <li>
            Perform any other function that we believe in
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
        </ul>
        <Badge type="added">added</Badge>

        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            Including about Conclude{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            Function that we believe in{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
          <li>News and requests for agreement Process transactions.</li>
        </ul>
      </ChangelogCard>

      <ChangelogCard date="v1.0.1 (March 15,2019)">
        <Badge type="depreciate">depreciate</Badge>
        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            Enhance or improve{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              User experience
            </Link>
            , our Site, or our Service.
          </li>
          <li>Process transactions.</li>
          <li>
            Send emails about our{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            Send emails and updates about Conclude, including news and requests for agreement to
            amended{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              legal documents
            </Link>{" "}
            such
          </li>
          <li>
            Perform any other function that we believe in
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
        </ul>
        <Badge type="security">security</Badge>
        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            Including about Conclude{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            Function that we believe in{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
          <li>News and requests for agreement Process transactions.</li>
        </ul>
      </ChangelogCard>

      <ChangelogCard date="v1.0 (January 01,2019)">
        <Badge type="remove">removed</Badge>
        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            Enhance or improve{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              User experience
            </Link>
            , our Site, or our Service.
          </li>
          <li>Process transactions.</li>
          <li>
            Send emails about our{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            Send emails and updates about Conclude, including news and requests for agreement to
            amended{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              legal documents
            </Link>{" "}
            such
          </li>
          <li>
            Perform any other function that we believe in
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
        </ul>
        <Badge type="security">security</Badge>
        <ul className="my-5" style={{ paddingInlineStart: "1.625em" }}>
          <li>
            Including about Conclude{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              Site or respond to
            </Link>{" "}
            inquiries.
          </li>
          <li>
            Function that we believe in{" "}
            <Link
              className="hover:underline font-semibold"
              style={{
                color: "rgb(254 96 25 / 1)",
              }}
              href="#!"
            >
              proper functioning
            </Link>{" "}
            of our Site.
          </li>
          <li>News and requests for agreement Process transactions.</li>
        </ul>
      </ChangelogCard>
    </>
  );
}
