import Post from "@/components/Post";
import { generateStaticParamsForLocale } from "@/lib/blog";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import imgproxyLoader from "@/lib/imgproxyLoader";
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

// Although we precompute the static paths, we still need to set this to true
// because new blog posts can be created after the build.
export const dynamicParams = true;

export async function generateStaticParams() {
  return generateStaticParamsForLocale(locale);
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const data = await postLoader(locale, params.slug);

  if (!data) return;

  const { post } = data;

  const p = np(locale);
  const date = new Date(+params.year, +params.month - 1, +params.day);
  const tail = p(date, params.slug, true);

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
    twitterImage: {
      url: imgproxyLoader({ src: `${tail}/twitter-image`, width: 1200 }),
      width: 1200,
      height: 630,
    },
    openGraphImage: {
      url: imgproxyLoader({ src: `${tail}/opengraph-image`, width: 1200 }),
      width: 1200,
      height: 630,
    },
  });
}

export default async function Page(props: Props) {
  const params = await props.params;
  const data = await postLoader(locale, params.slug);

  if (!data) notFound();

  const { post, recent, related } = data;

  return <Post locale={locale} post={post} recent={recent} related={related} />;
}
