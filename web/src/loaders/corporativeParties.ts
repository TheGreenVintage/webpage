import { getClient } from "@/lib/apollo";
import {
  GetCorporativePartiesDocument,
  GetCorporativePartiesQuery,
} from "@/generated/graphql";

export type CorporativePartiesType = NonNullable<
  GetCorporativePartiesQuery["corporativePartiesPage"]
>;

export type ContentType = NonNullable<
  GetCorporativePartiesQuery["corporativePartiesPage"]
>["content"][number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetCorporativePartiesQuery>({
    query: GetCorporativePartiesDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.corporativePartiesPage)
    throw new Error("Unable to load data");

  return data.corporativePartiesPage;
};
