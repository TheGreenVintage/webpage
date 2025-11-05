import Employees from "@/components/Employees";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { loader as employeesLoader } from "@/loaders/employees";
import { tl, en as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const { page } = await employeesLoader(locale);

  const t = tl(locale);

  const metaTitle = page.meta_title;
  const metaDescription = page.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "team",
    subtitle: t("sections.team"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const data = await employeesLoader(locale);

  const { title, precontent, postcontent } = data.page;

  return (
    <Employees
      locale={locale}
      title={title}
      precontent={precontent ?? []}
      postcontent={postcontent ?? []}
      employees={data.employees}
    />
  );
}
