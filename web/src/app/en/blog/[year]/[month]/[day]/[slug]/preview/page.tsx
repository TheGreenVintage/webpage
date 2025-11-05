import Post from "@/components/Post";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { en as locale } from "@/lib/locale";
import { np } from "@/lib/navigation";
import { loader as postLoader } from "@/loaders/post";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    year: string;
    month: string;
    day: string;
    slug: string;
  }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const data = await postLoader(locale, params.slug, true);

  if (!data) return;

  const { post } = data;

  const p = np(locale);
  const date = new Date(+params.year, +params.month - 1, +params.day);
  const tail = p(date, params.slug);

  const metaTitle = post.meta_title;
  const metaDescription = post.meta_description;

  return generateMetadataByLocale({
    locale,
    section: "blog",
    tail,
    subtitle: post.title,
    metaTitle,
    metaDescription,
    includeCompanyName: false,
  });
}

export default async function Page(props: Props) {
  const params = await props.params;
  const data = await postLoader(locale, params.slug, true);

  if (!data) notFound();

  const { post, recent, related } = data;

  return <Post locale={locale} post={post} recent={recent} related={related} />;
}
