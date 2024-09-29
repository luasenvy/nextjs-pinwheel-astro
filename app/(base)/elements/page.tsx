import Image from "next/image";
import Link from "next/link";

import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Notice from "@/components/Notice";
import PageHeader from "@/components/PageHeader";
import Shape from "@/components/Shape";
import Tabs from "@/components/Tabs";
import Video from "@/components/VideoComponent";
import Youtube from "@/components/Youtube";

import FlowerImage from "@/public/images/flower.jpg";
import IntroThumbnailImage from "@/public/images/intro-thumbnail.png";

const termAndConditions = {
  title: "Terms & Condition Of Pinwheel",
};

export default function TermsAndConditions() {
  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <PageHeader {...termAndConditions} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <hr />
            <h3>Paragraph</h3>
            <p>
              Did you come here for something in particular or just general Riker-bashing? And
              blowing into maximum warp speed, you appeared for an instant to be in two places at
              once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna
              talk about the assassination attempt on Lieutenant Worf. Could someone survive inside
              a transporter buffer for 75 years? Fate. It protects fools, little children, and
              ships.
            </p>
            <p>
              Did you come here for something in particular or just general Riker-bashing? And
              blowing into maximum warp speed, you appeared for an instant to be in two places at
              once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna
              talk about the assassination attempt on Lieutenant Worf. Could someone survive inside
              a transporter buffer for 75 years? Fate. It protects fools, little children, and
              ships.
            </p>
            <hr />
            <h3>Emphasis</h3>
            <ol>
              <li>Did you come here for something in **particular** or just general</li>

              <li>
                Did you come here for something in <ins>particular</ins>
              </li>

              <li>_Did you come here_</li>

              <li>Did you come here for **something** in particular</li>

              <li>Did you come here for something in particular</li>

              <li>Did you come here for something in particular</li>

              <li>
                URLs and URLs in angle brackets will automatically get turned into links.{" "}
                <Link href="http://www.example.com">http://www.example.com</Link> or
              </li>

              <li>
                <Link href="http://www.example.com">http://www.example.com</Link> and sometimes
                example.com (but not on Github, for example).
              </li>
            </ol>
            <hr />
            <h3>Link</h3>
            <Link href="https://www.google.com">I'm an inline-style link</Link>
            <Link href="https://www.google.com" title="Google's Homepage">
              I'm an inline-style link with title
            </Link>
            <Link href="#arbitrary">I'm a reference-style link</Link>
            <Link href="../blob/master/LICENSE">I'm a relative reference to a repository file</Link>
            <Link href="1">You can use numbers for reference-style link definitions</Link>
            Or leave it empty and use the <Link href=".">link text itself</Link>. example.com (but
            not on Github, for example). Some text to show that the reference links can follow
            later.
            <hr />
            <h3>Ordered List</h3>
            <ol>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ol>
            <hr />
            <h3>Unordered List</h3>
            <ul>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ul>
            <hr />
            <h3>Code and Syntax Highlighting</h3>
            <h4>HTML</h4>
            <pre>
              <code>{`<ul>
  <li class="nav-item">
    <a class="nav-link" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="about/">About</a>
  </li>
</ul>`}</code>
            </pre>
            <hr />
            <h4>CSS</h4>
            <pre>
              <code>{`img {
  vertical-align: middle;
  border: 0;
  max-width: 100%;
  height: auto;
}`}</code>
            </pre>
            <hr />
            <h4>JavaScript</h4>
            <pre>
              <code>{`window.addEventListener("load", (e) => {
  document.querySelector(".preloader").style.display = "none";
});`}</code>
            </pre>
            <hr />
            <h3>Button</h3>
            <Button href="#" style="solid">
              Button
            </Button>
            <hr />
            <h3>Quote</h3>
            <blockquote>
              Did you come here for something in particular or just general Riker-bashing? And
              blowing into maximum warp speed, you appeared for an instant to be in two places at
              once.
            </blockquote>
            <hr />
            <h3>Notice</h3>
            <Notice type="note">This is a simple note.</Notice>
            <Notice type="tip">This is a simple note.</Notice>
            <Notice type="info">This is a simple note.</Notice>
            <Notice type="warning">This is a simple note.</Notice>
            <hr />
            <h3>Tab</h3>
            <Tabs />
            <hr />
            <h3>Table</h3>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Row:1 Cell:1</td>
                  <td>Row:1 Cell:2</td>
                  <td>Row:1 Cell:3</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Row:2 Cell:1</td>
                  <td>Row:2 Cell:2</td>
                  <td>Row:2 Cell:3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Row:3 Cell:1</td>
                  <td>Row:3 Cell:2</td>
                  <td>Row:3 Cell:3</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <h3>Collapse</h3>
            <Accordion title="Why should you need to do this?">
              <ul>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
              </ul>
            </Accordion>
            <Accordion title="How can I adjust Horizontal centering">
              <ul>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
              </ul>
            </Accordion>
            <Accordion title="Should you use Negative margin?">
              <ul>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
                <li>This is a thing.</li>
              </ul>
            </Accordion>
            <hr />
            <h3>Image</h3>
            <Image src={FlowerImage} alt="" />
            <hr />
            <h3>Youtube video</h3>
            <Youtube id="g3-VxLQO7do" title="Play:Youtube" />
            <hr />
            <h3>Custom video</h3>
            <Video
              src={IntroThumbnailImage}
              height={370}
              width={700}
              title="Video"
              video_id={"g3-VxLQO7do"}
              video_width="w-[700px]"
              video_height="h-[370px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
