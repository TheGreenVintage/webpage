import Link from "next/link";
import { Locale, tl } from "@/lib/locale";

type Props = {
  locale: Locale;
};

export default function NotFound({ locale }: Props) {
  const t = tl(locale);

  return (
    <section className="mt-200 mb-200">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="bd-error text-center">
              <h1>
                4<span>0</span>4
              </h1>
              <h3 className="mb-20">{t("not_found.title")}</h3>
              <p>{t("not_found.description")}</p>
              <Link href={`/${locale}`} className="theme-btn mt-50">
                {t("not_found.back")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
