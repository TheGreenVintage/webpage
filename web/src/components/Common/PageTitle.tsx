import Link from "next/link";
import React, { type JSX } from "react";
import { Locale, tl } from "@/lib/locale";

type Props = {
  locale: Locale;
  title: string;
  asChild?: string;
  breadcrumbs: BreadcrumbItem[];
};

type BreadcrumbItem = {
  title: string;
  href: string;
};

const PageTitle = ({ locale, title, breadcrumbs, asChild = "h2" }: Props) => {
  const t = tl(locale);

  const finalBreadcrumbs: BreadcrumbItem[] = [
    {
      title: t("sections.home"),
      href: `/${locale}`,
    },
    ...breadcrumbs,
  ];

  const Title = asChild as keyof JSX.IntrinsicElements;

  return (
    <div className="bd-page-title-area bd-page-title-bg pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bd-page-title text-center z-index">
              <Title className="breadcrumb-title">{title}</Title>
              <div className="breadcrumb-menu">
                <nav className="breadcrumb-trail breadcrumbs">
                  <ul className="trail-items">
                    {finalBreadcrumbs.map((breadcrumb, index) => {
                      const more =
                        index == 0
                          ? "trail-begin"
                          : index === finalBreadcrumbs.length - 1
                            ? "trail-end"
                            : "trail-middle";

                      return (
                        <React.Fragment key={index}>
                          <li className={`trail-item ${more}`}>
                            <Link href={breadcrumb.href}>
                              {breadcrumb.title}
                            </Link>
                          </li>
                          {index < finalBreadcrumbs.length - 1 && (
                            <li className="trail-item trail-middle">
                              <i className="far fa-chevron-right"></i>
                            </li>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
