import * as Icon from "react-feather";

import { humanize } from "@/lib/textConverter";

export interface FeatureItem {
  icon: string;
  title: string;
  content: string;
}

interface HomepageFeatureProps {
  featureList: Array<FeatureItem>;
}

export default function HomepageFeature({ featureList }: HomepageFeatureProps) {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {featureList.map(({ icon, title, content }, i) => {
        const key = humanize(icon) as keyof typeof Icon;
        const FeatherIcon = Icon[key];

        return (
          <div key={i} className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">{title}</h3>
              <p>{content}</p>
            </div>
            <span className="icon mt-4">
              <FeatherIcon />
            </span>
          </div>
        );
      })}
    </div>
  );
}
