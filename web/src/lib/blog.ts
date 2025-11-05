import { Locale } from "./locale";
import { loader as postsLoader } from "@/loaders/posts";

export async function generateStaticParamsForLocale(locale: Locale) {
  const { posts } = await postsLoader(locale, 1, 100);

  return posts.map((post) => {
    const { slug, publishedAt, date } = post;

    const postDate = new Date(date || publishedAt);

    const year = postDate.getFullYear();
    const month = postDate.getMonth() + 1;
    const day = postDate.getDate();

    return {
      slug,
      year: String(year),
      month: String(month).padStart(2, "0"),
      day: String(day).padStart(2, "0"),
    };
  });
}
