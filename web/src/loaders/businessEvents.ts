import { getClient } from "@/lib/apollo";
import {
  GetBusinessEventsDocument,
  GetBusinessEventsQuery,
} from "@/generated/graphql";

export type BusinessEventsType = NonNullable<
  GetBusinessEventsQuery["businessEventsPage"]
>;

export type ContentType = NonNullable<
  GetBusinessEventsQuery["businessEventsPage"]
>["content"][number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetBusinessEventsQuery>({
    query: GetBusinessEventsDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.businessEventsPage) throw new Error("Unable to load data");

  return data.businessEventsPage;
};
