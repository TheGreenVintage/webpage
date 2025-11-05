import { getClient } from "@/lib/apollo";
import { GetTermsDocument, GetTermsQuery } from "@/generated/graphql";

export type TermsType = NonNullable<GetTermsQuery["termsConditionsPage"]>;

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetTermsQuery>({
    query: GetTermsDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.termsConditionsPage)
    throw new Error("Unable to load data");

  return data.termsConditionsPage;
};
