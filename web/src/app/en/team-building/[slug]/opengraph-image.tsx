import teamBuildingOpenGraphImage from "@/components/TeamBuildingOpenGraph";
import { loader as teamBuildingLoader } from "@/loaders/teamBuilding";
import { en as locale } from "@/lib/locale";

export const alt = "The Green Vintage";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const { teamBuilding } = await teamBuildingLoader(locale, params.slug);

  return teamBuildingOpenGraphImage({
    size,
    locale,
    teamBuilding,
  });
}
