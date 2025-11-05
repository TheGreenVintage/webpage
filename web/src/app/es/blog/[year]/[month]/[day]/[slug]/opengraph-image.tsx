import postOpenGraphImage from "@/components/BlogOpenGraph";

import { es as locale } from "@/lib/locale";
import { loader as postLoader } from "@/loaders/post";
import { notFound } from "next/navigation";

export const alt = "The Green Vintage";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await postLoader(locale, params.slug);

  if (!data) notFound();

  return postOpenGraphImage({
    size,
    post: data.post,
  });
}
