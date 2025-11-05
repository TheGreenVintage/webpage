import { cacheTag } from "@/lib/apollo";
import { revalidateTag, revalidatePath } from "next/cache";

const secret = "invalidate-thegreenvintage-plz";

const allBlogPages = (slug: string) => {
  return [
    "/en/blog",
    "/ca/blog",
    "/es/blog",
    "/en/blog/[year]/[month]/[day]/[slug]",
    "/ca/blog/[year]/[month]/[day]/[slug]",
    "/es/blog/[year]/[month]/[day]/[slug]",

    "/en/blog/[year]/[month]/[day]/[slug]/opengraph-image",
    "/ca/blog/[year]/[month]/[day]/[slug]/opengraph-image",
    "/es/blog/[year]/[month]/[day]/[slug]/opengraph-image",

    "/en/blog/[year]/[month]/[day]/[slug]/twitter-image",
    "/ca/blog/[year]/[month]/[day]/[slug]/twitter-image",
    "/es/blog/[year]/[month]/[day]/[slug]/twitter-image",
  ].map((path) => path.replace("[slug]", slug));
};

type SlugMap = (slug: string) => string[];

const invalidations: Record<string, string[] | SlugMap> = {
  "business-events-page": [
    "/en/business-events",
    "/ca/esdeveniments-corporatius",
    "/es/eventos-corportativos",
  ],
  "contact-page": ["/en/contact", "/ca/contacte", "/es/contacto"],
  "corporative-parties-page": [
    "/en/corporative-parties",
    "/ca/festes-corportatives",
    "/es/fiestas-corportativas",
  ],
  "home-page": ["/en", "/ca", "/es"],
  "legal-notice-page": [
    "/en/legal-notice",
    "/ca/avis-legal",
    "/es/aviso-legal",
  ],
  "manifest-page": ["/en/manifest", "/ca/manifest", "/es/manifiesto"],
  "projects-page": ["/en/projects", "/ca/projectes", "/es/proyectos"],
  "receptive-trips-page": [
    "/en/receptive-trips",
    "/ca/viatges-de-receptiu",
    "/es/viajes-de-receptivo",
  ],
  "services-page": ["/en/services", "/ca/servicios", "/es/servicios"],
  "sustainability-page": [
    "/en/sustainability",
    "/ca/sostenibilitat",
    "/es/sostenibilidad",
  ],
  "team-buildings-page": [
    "/en/team-building",
    "/ca/team-building",
    "/es/team-building",
  ],
  "team-page": ["/en/team", "/ca/equip", "/es/equipo"],
  "terms-conditions-page": [
    "/en/terms-and-conditions",
    "/ca/termes-i-condicions",
    "/es/terminos-y-condiciones",
  ],

  // Collections
  author: (_slug: string) => allBlogPages("[slug]"), // All blog posts
  employee: ["/en/team", "/ca/equip", "/es/equipo"],
  logo: ["/en", "/ca", "/es"],
  post: (slug: string) => allBlogPages(slug),
  project: [
    "/en/projects",
    "/ca/projectes",
    "/es/proyectos",
    "/en/projects/[slug]", // TODO: Refine with slug
    "/ca/projectes/[slug]", // TODO: Refine with slug
    "/es/proyectos/[slug]", // TODO: Refine with slug
  ],
  "team-building": [
    "/en/team-building",
    "/ca/team-building",
    "/es/team-building",
    "/en/team-building/[slug]", // TODO: Refine with slug
    "/ca/team-building/[slug]", // TODO: Refine with slug
    "/es/team-building/[slug]", // TODO: Refine with slug
  ],
};

export async function POST(request: Request) {
  console.log("New invalidation request...");

  const token = request.headers.get("x-thegreenvintage-token");

  if (token !== secret) {
    console.log("Invalid token");

    return new Response("Invalid token", {
      status: 403,
    });
  }

  const json = await request.json();

  const { model, event, entry } = json;

  let paths = invalidations[model];

  if (!paths) {
    console.error(`Invalid model '${model}'`);

    return new Response(`Invalid model '${model}'`, {
      status: 429,
    });
  }

  if (typeof paths === "function") {
    paths = paths(entry.slug);
  }

  console.log(
    `Invalidation request for: ${model} (Event: ${event}) (Paths: ${paths.length})`,
  );

  // Invalidate apollo cache
  revalidateTag(cacheTag);

  paths.forEach((path) => revalidatePath(path, "page"));

  console.log("Invalidation completed");

  return new Response(`Invalidated model cache for '${model}'`);
}

export async function GET(_request: Request) {
  return new Response("Only POST method supported");
}
