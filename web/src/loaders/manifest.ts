import { getClient } from "@/lib/apollo";
import { GetManifestDocument, GetManifestQuery } from "@/generated/graphql";

export type ContentType = NonNullable<
  GetManifestQuery["manifestPage"]
>["content"][number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetManifestQuery>({
    query: GetManifestDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.manifestPage) throw new Error("Unable to load data");

  return data.manifestPage;
};
