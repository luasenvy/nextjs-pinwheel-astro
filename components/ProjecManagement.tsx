"use client";

import { parseInline } from "marked";

import FeatureService, { type FeatureServiceProps } from "./FeatureService";

import FeatureTab, { type FeatureTabProps } from "@/components/FeatureTab";
import Projects, { type ProjectsProps } from "@/components/Projects";

export interface ProjectManagementProps {
  title: string;
  content: string;
  management: ProjectsProps;
  feature_service: FeatureServiceProps;
  feature_tab: FeatureTabProps;
}

export default function ProjectManagement({
  title,
  content,
  management,
  feature_service,
  feature_tab,
}: ProjectManagementProps) {
  return (
    <section className="section features pb-0">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-7">
            {title.split("\n").map((text, i) => (
              <h2 key={`header-${i}`}>{(parseInline(text) as string).replace("&amp;", "&")}</h2>
            ))}

            {content.split("\n").map((text, i) => (
              <p key={`content-${i}`} className="mt-4">
                {(parseInline(text) as string).replace("&amp;", "&")}
              </p>
            ))}
          </div>
        </div>
        <div className="p mt-14 rounded-xl bg-white p-6 shadow-lg lg:px-12 lg:py-16">
          <div className="row">
            <Projects {...management} />
          </div>
        </div>
        <FeatureService {...feature_service} />
        <FeatureTab {...feature_tab} />
      </div>
    </section>
  );
}
