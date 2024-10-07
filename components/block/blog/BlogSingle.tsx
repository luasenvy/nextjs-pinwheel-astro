import { slug as slugify } from "github-slugger";
import Image from "next/image";

import { useMemo } from "react";
import { FaRegCalendarAlt, FaRegClock, FaRegFolder, FaRegUserCircle } from "react-icons/fa";

import Link from "@/components/ViewTransitionLink";

import Disqus from "@/components/block/Disqus";

import type { PostItem } from "@/lib/data/blog";
import dateFormat from "@/lib/dateFormat";
import readingTime from "@/lib/readingTime";
import { humanize } from "@/lib/textConverter";

export interface BlogSingleProps {
  post: PostItem;
}

export default function BlogSingle({ post }: BlogSingleProps) {
  const PostArticle = useMemo(() => post?.Component && <post.Component />, [post]);

  const { title, author, date, categories, image, content, slug } = useMemo(
    () => post?.metadata ?? {},
    [post]
  );

  return (
    <section className="section blog-single">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-10">
            {image && (
              <Image className="w-full rounded-xl" src={image} alt="" width={920} height={450} />
            )}
          </div>
          <div className="mt-10 max-w-[810px] lg:col-9">
            <h1 className="h2">{title}</h1>
            <div className="mb-5 mt-6 flex items-center space-x-2">
              <ul className="mb-4">
                <li className="mr-4 inline-block">
                  <FaRegUserCircle className="mr-2 -mt-1 inline-block" />
                  {humanize(author)}
                </li>

                <li className="mr-4 inline-block">
                  <FaRegCalendarAlt className="mr-2 -mt-1 inline-block" />
                  {dateFormat(date)}
                </li>
                <li className="mr-4 inline-block">
                  <FaRegClock className="mr-2 -mt-1 inline-block" />
                  {readingTime(content)}
                </li>
                <li className="mr-4 inline-block">
                  <FaRegFolder className="mr-2 -mt-1 inline-block" />
                  {categories?.map((category: string, index: number) => (
                    <Link
                      key={`view-cat-link-${index}`}
                      href={`/categories/${slugify(category)}`}
                      className="hover:text-primary"
                    >
                      {humanize(category)}
                      {index !== categories.length - 1 && ","}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
            <div className="content">{PostArticle}</div>
            {slug && (
              <Disqus
                enable
                shortname="themefisher-template"
                settings={{ identifier: slug, title }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
