import { MetadataRoute } from "next";
import { loader as teamBuildingsLoader } from "@/loaders/teamBuildings";
import { loader as projectsLoader } from "@/loaders/projects";
import { loader as postsLoader } from "@/loaders/posts";
import { nl, np } from "@/lib/navigation";
import { locales } from "@/lib/locale";

const domain = (pathname: string) =>
  `https://www.thegreenvintage.com${pathname}`;

const getRandomDate = (padding: number) => {
  return new Date(new Date().getTime() - padding + Math.random() * padding);
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemaps = await Promise.all(
    locales.map(async (locale) => {
      const teamBuildings = await teamBuildingsLoader(locale);
      const n = nl(locale);
      const p = np(locale);

      const topPageSitemap = {
        url: domain(`/${locale}`),
        lastModified: getRandomDate(100000000),
        changeFrequency: "weekly",
        priority: 1,
      } as const;

      const teamBuildingsSitemaps = teamBuildings.teamBuildings
        .map((teamBuilding) => {
          if (!teamBuilding) return null;

          const slug = teamBuilding.slug;
          const url = n("team_building", slug);
          return {
            url: domain(url),
            lastModified: getRandomDate(100000000),
            changeFrequency: "weekly",
            priority: 0.8,
          } as const;
        })
        .filter((x) => x !== null);

      const projects = await projectsLoader(locale);
      const projectsSitemaps = projects.projects
        .map((project) => {
          if (!project) return null;

          const slug = project.slug;
          const url = n("projects", slug);
          return {
            url: domain(url),
            lastModified: getRandomDate(100000000),
            changeFrequency: "weekly",
            priority: 0.8,
          } as const;
        })
        .filter((x) => x !== null);

      const postsSample = await postsLoader(locale, 1);

      const postsSitemaps = await Promise.all(
        Array.from({ length: postsSample.pageCount }, (_v, i) => i).flatMap(
          async (page) => {
            const posts = await postsLoader(locale, page + 1);
            const postsUrls = posts.posts
              .map((post) => {
                const { publishedAt, date, slug } = post;
                const lastModified = date || publishedAt;
                const url = p(date || publishedAt, slug);

                return {
                  url: domain(url),
                  lastModified,
                  changeFrequency: "monthly",
                  priority: 0.5,
                } as const;
              })
              .filter((x) => x !== null);

            return [
              {
                url: domain(`${n("blog")}?page=${page + 1}`),
                lastModified: postsUrls[0]?.lastModified,
                changeFrequency: "monthly",
                priority: 0.5,
              } as const,
              ...postsUrls,
            ];
          },
        ),
      );

      const sections = [
        "team",
        "manifest",
        "sustainability",
        "services",
        "projects",
        "team_building",
        "receptive-trips",
        "corporative-parties",
        "business-events",
        "contact",
        "legal",
        "terms",
      ];
      const otherSitemaps = sections.map((section) => {
        const url = n(section);
        return {
          url: domain(url),
          lastModified: getRandomDate(2000000000),
          changeFrequency: "weekly",
          priority: 0.7,
        } as const;
      });

      return [
        topPageSitemap,
        ...teamBuildingsSitemaps,
        ...projectsSitemaps,
        ...postsSitemaps.flat(),
        ...otherSitemaps,
      ];

      return [];
    }),
  );

  return sitemaps.flat();
}
