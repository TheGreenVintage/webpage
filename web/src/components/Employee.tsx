import { EmployeeType } from "@/loaders/employees";
import { Locale, tl } from "@/lib/locale";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "./Common/PageTitle";
import { nl } from "@/lib/navigation";

type Props = {
  locale: Locale;
  employee: EmployeeType;
};

export default function Employee({ locale, employee }: Props) {
  const n = nl(locale);
  const t = tl(locale);

  const { name, role, photo } = employee;
  const { url: imageUrl } = photo;

  return (
    <main>
      <PageTitle
        locale={locale}
        title={t("sections.team")}
        breadcrumbs={[
          {
            title: t("sections.team"),
            href: n("team"),
          },
        ]}
      />

      <div className="service-details-area pt-120 p-rel pb-120">
        <div className="container p-rel">
          <div className="service-details-content">
            <div className="service-details-top mb-45">
              <span className="s-details-subtitle">{role}</span>
              <h3 className="sas-details-title">{name}</h3>
            </div>
            <div className="service-author-biography">
              <div className="row align-items-center mb-100">
                <div className="col-xxl-6 col-xl-6 col-lg-7">
                  <div className="author-biography-thumb mb-30 mb-lg-0">
                    <Image
                      src={imageUrl}
                      style={{ width: "100%", height: "auto" }}
                      alt={name}
                      width={500}
                      height={600}
                    />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-5">
                  <div className="single-author-biography-info biography-info-space pl-40">
                    <h3 className="single-author-biography-title">Biography</h3>
                    <p className="single-author-biography-desc">
                      Lost the plot James Bond say burke skive offs spiffing
                      dropped
                      <br /> a clanger, me old mucker absolutely.
                    </p>
                    <div className="single-author-biography-address-list">
                      <ul>
                        <li>
                          <i className="fal fa-phone-alt"></i>
                          <Link href="tel:(+88)587698202">
                            (+88) 587-698-202
                          </Link>
                        </li>
                        <li>
                          <i className="fal fa-envelope"></i>
                          <Link href="mailto:info@example.com">
                            saja@example.com
                          </Link>
                        </li>
                        <li>
                          <i className="fal fa-map-marker-alt"></i> 56785
                          Brainson Street New York, USA
                        </li>
                      </ul>
                    </div>
                    <div className="single-author-biography-social mb-45">
                      <Link href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="https://vimeo.com/">
                        <i className="fab fa-vimeo-v"></i>
                      </Link>
                      <Link href="https://bd.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                    {/* <Progressbar /> */}
                  </div>
                </div>
              </div>
              <div className="service-next-prev d-flex justify-content-between">
                <Link href="/service-details" className="prev-arrow-redirect">
                  <i className="fal fa-arrow-left"></i>
                  Previous
                </Link>
                <Link href="/service-details" className="next-arrow-redirect">
                  Next <i className="fal fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
