import classnames from "classnames";
import Image from "next/image";

import { AiFillCheckCircle } from "react-icons/ai";

import Shape from "@/components/Shape";
import Cta from "@/components/block/Cta";
import PageHeader from "@/components/block/PageHeader";
import { howItWorks, our_works, perfomance } from "@/lib/data/how-it-works";

export default function HowItWorks() {
  return (
    <>
      <Shape />
      <section className="page-hero pb-14 pt-16">
        <div className="container">
          <div className="page-hero-content mx-auto max-w-[883px] text-center">
            <PageHeader {...howItWorks} />
          </div>

          <div className="row mt-14">
            {perfomance.map((item, i: number) => (
              <div key={i} className="mt-10 text-center sm:col-6 md:col-4 md:mb-0">
                <div
                  className={classnames(
                    "relative mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl bg-white p-4 shadow-lg",
                    {
                      "after:absolute after:-right-4 after:-z-[1] after:hidden after:w-full after:translate-x-full after:border-b-2 after:border-dashed after:border-primary/50 after:content-[''] md:after:block":
                        perfomance.length - 1 !== i,
                    }
                  )}
                >
                  <Image height={122} width={144} src={item.image} alt="" />
                </div>
                <h2 className="h5">{item.title}</h2>
                <p className="mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {our_works.map(({ image, title, list }, index: number) => (
            <div key={`our-works-${index}`} className="gx-5 row mt-16 items-center first:mt-12">
              <div
                className={classnames("lg:col-7", {
                  "lg:order-1": index % 2 === 0,
                  "lg:order-0": index % 2 !== 0,
                })}
              >
                <div className="relative">
                  <Image
                    className="w-full object-contain"
                    alt="service"
                    width={473}
                    height={286}
                    src={image}
                  />
                </div>
              </div>
              <div
                className={classnames("mt-6 lg:col-5 lg:mt-0", {
                  "lg:order-0": index % 2 === 0,
                  "lg:order-1": index % 2 !== 0,
                })}
              >
                <div className="text-container">
                  <h2 className="lg:text-4xl">{title}</h2>

                  <ul className="mt-6 text-dark lg:-ml-4">
                    {list.map((item, j) => (
                      <li
                        key={`our-works-item-${index}-${j}`}
                        className="mb-2 flex items-center rounded px-4"
                      >
                        <AiFillCheckCircle className="mr-3 fill-primary text-white" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
