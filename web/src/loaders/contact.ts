import { getClient } from "@/lib/apollo";
import { GetContactDocument, GetContactQuery } from "@/generated/graphql";

export type ContactType = NonNullable<GetContactQuery["contactPage"]>;

export type PreContentType = NonNullable<NonNullable<
  NonNullable<GetContactQuery["contactPage"]>
>["precontent"]>[number];

export type PostContentType = NonNullable<NonNullable<
  NonNullable<GetContactQuery["contactPage"]>
>["postcontent"]>[number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetContactQuery>({
    query: GetContactDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.contactPage) throw new Error("Unable to load data");

  return data.contactPage;
};
