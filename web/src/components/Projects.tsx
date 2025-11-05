import Link from "next/link";
import {
  ProjectType,
  PreContentType,
  PostContentType,
} from "@/loaders/projects";
import { Locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import PageTitle from "./Common/PageTitle";
import Image from "next/image";
import DynamicComponentPage, { mapPicture } from "./DynamicContentPage";

type Props = {
  locale: Locale;
  projects: ProjectType[];
  precontent: PreContentType[];
  postcontent: PostContentType[];
};

type ProjectCardProps = {
  locale: Locale;
  project: ProjectType;
  priority: boolean;
};

function ProjectCard({ locale, project, priority }: ProjectCardProps) {
  const { title, cover, slug } = project;
  const n = nl(locale);

  const picture = mapPicture(cover, locale);

  return (
    <div className="col-lg-4 col-md-6">
      <Link href={n("projects", slug)}>
        <div className="bd-portfolio stable mb-30">
          <Image
            src={picture.url}
            alt={picture.alternativeText || title}
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
            priority={priority}
          />
          <div className="bd-portfolio-text">
            <h5 className="bd-portfolio-title">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Projects({
  locale,
  projects,
  precontent,
  postcontent,
}: Props) {
  const n = nl(locale);
  const t = tl(locale);

  return (
    <>
      <PageTitle
        locale={locale}
        title={t("sections.projects")}
        breadcrumbs={[
          {
            title: t("sections.projects"),
            href: n("projects"),
          },
        ]}
      />
      <DynamicComponentPage locale={locale} content={precontent} />
      <section className="portfolio-area">
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <ProjectCard
                locale={locale}
                key={project.slug}
                project={project}
                priority={index < 6}
              />
            ))}
          </div>
        </div>
      </section>
      <DynamicComponentPage locale={locale} content={postcontent} />
    </>
  );
}
