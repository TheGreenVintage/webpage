import React from "react";
import Project from "@/components/Project";
import { loader as projectLoader } from "@/loaders/project";
import { loader as projectsLoader } from "@/loaders/projects";
import { notFound } from "next/navigation";
import { nl } from "@/lib/navigation";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { es as locale, tl } from "@/lib/locale";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { projects } = await projectsLoader(locale);

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const project = await projectLoader(locale, params.slug);

  if (!project) return;

  const t = tl(locale);
  const n = nl(locale);
  const tail = n("projects", params.slug);

  const metaTitle = project.meta_title;
  const metaDescription = project.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "projects",
    tail,
    subtitle: t("sections.projects") + " - " + project.title,
    metaTitle,
    metaDescription,
    includeCompanyName: false,
  });
}

export default async function Page(props: Props) {
  const params = await props.params;
  const project = await projectLoader(locale, params.slug);

  if (!project) notFound();

  return <Project locale={locale} project={project} />;
}
