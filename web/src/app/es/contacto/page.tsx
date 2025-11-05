import Contact from "@/components/Contact";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { loader as contactLoader } from "@/loaders/contact";
import { tl, es as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const contact = await contactLoader(locale);

  const t = tl(locale);

  const metaTitle = contact.meta_title;
  const metaDescription = contact.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "contact",
    subtitle: t("sections.contact"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const contact = await contactLoader(locale);
  const { pretitle, title, description, precontent, postcontent } = contact;

  return (
    <Contact
      locale={locale}
      pretitle={pretitle}
      title={title}
      description={description}
      precontent={precontent ?? []}
      postcontent={postcontent ?? []}
    />
  );
}
