import { getClient } from "@/lib/apollo";
import {
  GetReceptiveTripsDocument,
  GetReceptiveTripsQuery,
} from "@/generated/graphql";

export type ReceptiveTripsType = NonNullable<
  NonNullable<GetReceptiveTripsQuery["receptiveTripsPage"]>
>;

export type ContentType = NonNullable<
  GetReceptiveTripsQuery["receptiveTripsPage"]
>["content"][number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetReceptiveTripsQuery>({
    query: GetReceptiveTripsDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.receptiveTripsPage) throw new Error("Unable to load data");

  return {
    page: data.receptiveTripsPage,
  };
};
