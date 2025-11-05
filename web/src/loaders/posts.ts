import { getClient } from "@/lib/apollo";
import { GetPostsDocument, GetPostsQuery } from "@/generated/graphql";

export type PostType = NonNullable<
  GetPostsQuery["posts_connection"]
>["nodes"][number];

export const loader = async (locale: string, page: number, pageSize = 9) => {
  const { error, data } = await getClient().query<GetPostsQuery>({
    query: GetPostsDocument,
    variables: {
      locale,
      page,
      pageSize,
      lteDate: new Date().toISOString().substring(0, 10),
    },
  });

  if (error || !data.posts_connection) throw new Error("Unable to load data");

  return {
    posts: data.posts_connection.nodes ?? [],
    page: data.posts_connection.pageInfo.page,
    pageSize: data.posts_connection.pageInfo.pageSize,
    pageCount: data.posts_connection.pageInfo.pageCount,
    total: data.posts_connection.pageInfo.total,
  };
};
