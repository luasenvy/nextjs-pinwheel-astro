import Image from "next/image";
import Link from "next/link";

interface FeatureItem {
  title: string;
  content: string;
}

export interface WorksProps {
  features: {
    title: string;
    button: {
      label: string;
      link: string;
      enable: boolean;
    };
    features_list: Array<FeatureItem>;
  };
}

export default function Works({ features }: WorksProps) {
  const { title, button, features_list } = features;

  return (
    <section className="section">
      <div className="container">
        <div className="row items-center justify-between">
          <div className="md:col-5">
            {title.split("\n").map((text, i) => (
              <h2 key={i} className="text-center md:text-left">
                {text}
              </h2>
            ))}
          </div>
          {button.enable && (
            <div className="mt-6 text-center md:col-3 md:mt-0 md:text-right">
              <Link className="btn btn-primary" href={button.link}>
                {button.label}
              </Link>
            </div>
          )}
        </div>
        <div className="row mt-14">
          {features_list.map(({ title, content }, i: number) => (
            <div key={i} className="mb-8 sm:col-6 lg:col-4">
              <div className="rounded-xl bg-white p-6 shadow-lg lg:p-8">
                <div className="gradient-number relative inline-block">
                  <span className="bg-gradient absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {i > 8 ? i + 1 : `0${i + 1}`}
                  </span>
                  <Image height={90} width={90} src="/images/gradient-number-bg.png" alt="" />
                </div>
                <h4 className="my-6">{title}</h4>
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
