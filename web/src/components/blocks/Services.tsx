import { nl } from "@/lib/navigation";
import React, { type JSX } from "react";
import Icon, { Icons } from "../Icon";
import { Locale } from "@/lib/locale";

type SubserviceType = {
  title: string;
  description: string;
  url?: string;
  icon: Icons;
};

type Props = {
  locale: Locale;
  pretitle: string;
  title: string;
  description: string;
  asChild?: string | null;
  subservices: SubserviceType[];
};

export default function Services({
  locale,
  pretitle,
  title,
  description,
  asChild,
  subservices,
}: Props) {
  const n = nl(locale);

  const Title = (asChild ?? "h2") as keyof JSX.IntrinsicElements;

  return (
    <section className="bd-service-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bd-section-title-wrapper mb-50 ">
              <h5 className="bd-section-subtitle mb-15 ">{pretitle}</h5>
              <Title className="bd-section-title mb-25">{title}</Title>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {subservices.map((subservice, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="bd-service bd-service-four mb-30">
                <div className="bd-service-icon mb-20">
                  <Icon name={subservice.icon} />
                </div>
                <h4 className="bd-service-title mb-20">
                  <a href={subservice.url ?? n("services")}>
                    {subservice.title}
                  </a>
                </h4>
                <p>{subservice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
