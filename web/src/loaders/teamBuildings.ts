import { getClient } from "@/lib/apollo";
import {
  GetTeamBuildingsDocument,
  GetTeamBuildingsQuery,
} from "@/generated/graphql";

export type TeamBuildingType = NonNullable<
  GetTeamBuildingsQuery["teamBuildings"][number]
>;

export type PreContentType = NonNullable<
  NonNullable<GetTeamBuildingsQuery["teamBuildingsPage"]>["precontent"]
>[number];

export type PostContentType = NonNullable<
  NonNullable<GetTeamBuildingsQuery["teamBuildingsPage"]>["postcontent"]
>[number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetTeamBuildingsQuery>({
    query: GetTeamBuildingsDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.teamBuildingsPage) throw new Error("Unable to load data");

  return {
    teamBuildings: data.teamBuildings.filter((x) => x !== null),
    page: data.teamBuildingsPage,
  };
};
