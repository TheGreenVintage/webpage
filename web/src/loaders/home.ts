import { GetHomeDocument, GetHomeQuery } from "@/generated/graphql";
import { getClient } from "@/lib/apollo";

export type LogoType = NonNullable<GetHomeQuery["logos"][number]>;
export type TeamBuildingType = NonNullable<
  GetHomeQuery["teamBuildings"][number]
>;
export type ContentType = NonNullable<
  GetHomeQuery["homePage"]
>["content"][number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetHomeQuery>({
    query: GetHomeDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.homePage) throw new Error("Unable to load data");

  return {
    logos: data.logos.filter((x) => x !== null),
    teamBuildings: data.teamBuildings.filter((x) => x !== null),
    page: data.homePage,
  };
};
