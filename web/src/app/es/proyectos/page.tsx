import React from "react";
import Projects from "@/components/Projects";
import { loader as projectsLoader } from "@/loaders/projects";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { tl, es as locale } from "@/lib/locale";

export const dynamic = "force-static";

export async function generateMetadata() {
  const { page } = await projectsLoader(locale);

  const t = tl(locale);

  const metaTitle = page.meta_title;
  const metaDescription = page.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "projects",
    subtitle: t("sections.projects"),
    metaTitle,
    metaDescription,
  });
}

export default async function Page() {
  const { projects, page } = await projectsLoader(locale);

  return (
    <Projects
      locale={locale}
      projects={projects}
      precontent={page.precontent}
      postcontent={page.postcontent}
    />
  );
}
