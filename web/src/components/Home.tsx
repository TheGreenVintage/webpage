import { ContentType, LogoType, TeamBuildingType } from "@/loaders/home";
import DynamicComponentPage from "./DynamicContentPage";
import { Locale } from "@/lib/locale";

type Props = {
  locale: Locale;
  logos: LogoType[];
  teamBuildings: TeamBuildingType[];
  content: ContentType[];
};

export default function Home({ locale, logos, teamBuildings, content }: Props) {
  return (
    <DynamicComponentPage
      locale={locale}
      logos={logos}
      teamBuildings={teamBuildings}
      content={content}
    />
  );
}
