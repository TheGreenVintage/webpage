import { getClient } from "@/lib/apollo";
import {
  GetSustainabilityDocument,
  GetSustainabilityQuery,
} from "@/generated/graphql";

export type ContentType = NonNullable<
  NonNullable<GetSustainabilityQuery["sustainabilityPage"]>["content"]
>[number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetSustainabilityQuery>({
    query: GetSustainabilityDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.sustainabilityPage) throw new Error("Unable to load data");

  return data.sustainabilityPage;
};
