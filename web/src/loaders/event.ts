import { getClient } from "@/lib/apollo";
import { GetEventDocument, GetEventsQuery } from "@/generated/graphql";

export type EventType = NonNullable<GetEventsQuery["events"][number]>;

export const loader = async (locale: string, slug: string) => {
  const { error, data } = await getClient().query<GetEventsQuery>({
    query: GetEventDocument,
    variables: {
      locale,
      slug,
    },
  });

  if (error || !data.events) throw new Error("Unable to load data");

  return data.events[0];
};
