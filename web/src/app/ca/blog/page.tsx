import Blog from "@/components/Blog";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { ca as locale, tl } from "@/lib/locale";
import { nl } from "@/lib/navigation";
import { loader as postsLoader } from "@/loaders/posts";
import { isFinite } from "lodash";
import { notFound } from "next/navigation";

type Props = {
  searchParams: Promise<{
    page?: number;
  }>;
};

export async function generateMetadata(props: Props) {
  const searchParams = await props.searchParams;
  if (searchParams.page && !isFinite(+searchParams.page)) {
    notFound();
  }

  const t = tl(locale);
  const n = nl(locale);

  const pageParam = searchParams.page ? +searchParams.page : 1;
  const tail = `${n("blog")}?page=${pageParam}`;

  return generateMetadataByLocale({
    locale,
    section: "blog",
    tail,
    subtitle: [t("sections.blog"), t("blog.page") + " " + pageParam].join(
      " - ",
    ),
    metaDescription: [
      t("blog.description"),
      t("blog.page") + " " + pageParam,
    ].join(" - "),
  });
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  if (searchParams.page && !isFinite(+searchParams.page)) {
    notFound();
  }

  const pageParam = searchParams.page ? +searchParams.page : 1;
  const { posts, page, pageCount } = await postsLoader(locale, pageParam);

  return (
    <Blog locale={locale} posts={posts} page={page} pageCount={pageCount} />
  );
}
