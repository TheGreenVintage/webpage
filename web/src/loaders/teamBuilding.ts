import { getClient } from "@/lib/apollo";
import {
  GetTeamBuildingDocument,
  GetTeamBuildingQuery,
} from "@/generated/graphql";

export type TeamBuildingType = NonNullable<
  GetTeamBuildingQuery["teamBuildings"][number]
>;

export type OtherTeamBuildingType = NonNullable<
  GetTeamBuildingQuery["others"][number]
>;

export const pickOtherItems = (
  teamBuildings: OtherTeamBuildingType[],
  currentSlug?: string,
) => {
  const n = 3;
  return teamBuildings
    .filter((teamBuilding) => teamBuilding?.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, n);
};

export const loader = async (locale: string, slug: string) => {
  const { error, data } = await getClient().query<GetTeamBuildingQuery>({
    query: GetTeamBuildingDocument,
    variables: {
      locale,
      slug,
    },
  });

  if (error || !data.teamBuildings || !data.teamBuildings[0])
    throw new Error("Unable to load data");

  return {
    teamBuilding: data.teamBuildings[0],
    others: data.others.filter((x) => x !== null),
  };
};
