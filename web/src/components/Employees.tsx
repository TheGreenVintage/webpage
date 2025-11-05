import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import {
  EmployeeType,
  PostContentType,
  PreContentType,
} from "@/loaders/employees";
import Image from "next/image";
import PageTitle from "./Common/PageTitle";
import DynamicComponentPage, { mapPicture } from "./DynamicContentPage";

type Props = {
  locale: Locale;
  title?: string | null;
  employees: EmployeeType[];
  precontent: PreContentType[];
  postcontent: PostContentType[];
};

type EmployeeCardProps = {
  locale: Locale;
  employee: EmployeeType;
};

function EmployeeCard({ locale, employee }: EmployeeCardProps) {
  const { name, role, photo } = employee;
  const picture = mapPicture(photo, locale);

  return (
    <div className="col-lg-3 col-md-6">
      <div className="bd-portfolio stable bd-team-four mb-30">
        <Image
          src={picture.url}
          alt={picture.alternativeText || name}
          width={290}
          height={360}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="bd-team-four-text">
          <h5 className="bd-team-four-title">{name}</h5>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Employees({
  locale,
  title,
  employees,
  precontent,
  postcontent,
}: Props) {
  const n = nl(locale);
  const t = tl(locale);

  return (
    <main>
      <PageTitle
        locale={locale}
        title={title || t("sections.team")}
        breadcrumbs={[
          {
            title: t("sections.team"),
            href: n("team"),
          },
        ]}
      />
      <DynamicComponentPage locale={locale} content={precontent} />
      <section className="bd-team-area">
        <div className="container">
          <div className="row">
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.slug}
                locale={locale}
                employee={employee}
              />
            ))}
          </div>
        </div>
      </section>
      <DynamicComponentPage locale={locale} content={postcontent} />
    </main>
  );
}
