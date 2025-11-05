import { getClient } from "@/lib/apollo";
import { GetLegalDocument, GetLegalQuery } from "@/generated/graphql";

export type LegalType = NonNullable<GetLegalQuery["legalNoticePage"]>;

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetLegalQuery>({
    query: GetLegalDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.legalNoticePage) throw new Error("Unable to load data");

  return data.legalNoticePage;
};
