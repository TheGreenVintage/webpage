import { getClient } from "@/lib/apollo";
import { GetProjectDocument, GetProjectQuery } from "@/generated/graphql";

export type ProjectType = NonNullable<GetProjectQuery["projects"][number]>;

export const loader = async (locale: string, slug: string) => {
  const { error, data } = await getClient().query<GetProjectQuery>({
    query: GetProjectDocument,
    variables: {
      locale,
      slug,
    },
  });

  if (error || !data.projects) throw new Error("Unable to load data");

  return data.projects[0];
};
