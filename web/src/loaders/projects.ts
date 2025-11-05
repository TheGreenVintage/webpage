import { getClient } from "@/lib/apollo";
import { GetProjectsDocument, GetProjectsQuery } from "@/generated/graphql";

export type ProjectType = NonNullable<GetProjectsQuery["projects"][number]>;

export type PreContentType = NonNullable<
  GetProjectsQuery["projectsPage"]
>["precontent"][number];

export type PostContentType = NonNullable<
  GetProjectsQuery["projectsPage"]
>["postcontent"][number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetProjectsQuery>({
    query: GetProjectsDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.projectsPage) throw new Error("Unable to load data");

  return {
    projects: data.projects.filter((x) => x !== null),
    page: data.projectsPage,
  };
};
