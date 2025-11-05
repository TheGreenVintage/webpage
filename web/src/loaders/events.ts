import { getClient } from "@/lib/apollo";
import { GetEventsDocument, GetEventsQuery } from "@/generated/graphql";

export type EventType = GetEventsQuery["events"][number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetEventsQuery>({
    query: GetEventsDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.events) throw new Error("Unable to load data");

  return data.events.filter((x) => x !== null);
};
