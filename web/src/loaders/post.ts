import { getClient } from "@/lib/apollo";
import {
  GetPostDocument,
  GetPostQuery,
  GetRelatedPostDocument,
  GetRelatedPostQuery,
} from "@/generated/graphql";

export type PostType = NonNullable<GetPostQuery["posts"][number]>;

export type RecentType = NonNullable<GetPostQuery["recent"][number]>;

export type RelatedType = NonNullable<GetRelatedPostQuery["posts"][number]>;

export const loader = async (
  locale: string,
  slug: string,
  preview: boolean = false,
) => {
  const lteDate = new Date();

  const { error, data } = await getClient().query<GetPostQuery>({
    query: GetPostDocument,
    variables: {
      locale,
      slug,
      lteDate: lteDate.toISOString().substring(0, 10),
      status: preview ? "DRAFT" : "PUBLISHED",
    },
  });

  if (error || !data?.posts[0]) return undefined;

  const post = data.posts[0];

  const releatedDate = new Date(post.date);

  releatedDate.setDate(releatedDate.getDate() - 1);

  // NOTE: Search posts that are published before the current post
  const { error: errorRelated, data: dataRelated } =
    await getClient().query<GetRelatedPostQuery>({
      query: GetRelatedPostDocument,
      variables: {
        locale,
        lteDate: releatedDate.toISOString().substring(0, 10),
      },
    });

  if (errorRelated || !dataRelated.posts)
    throw new Error("Unable to load related data");

  return {
    post,
    recent: data.recent.filter((x) => x !== null),
    related: dataRelated.posts.filter((x) => x !== null),
  };
};
