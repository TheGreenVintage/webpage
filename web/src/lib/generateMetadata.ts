import { Locale, defaultLocale, locales, tl } from "@/lib/locale";
import { compact } from "lodash";
import type { Metadata } from "next";
import { AlternateURLs } from "next/dist/lib/metadata/types/alternative-urls-types";
import { nl } from "./navigation";

type SocialNetworkImage = {
  url: string;
  width: number;
  height: number;
};

interface GenerateMetadataArgs {
  locale: Locale;
  section: string;
  tail?: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  subtitle?: string;
  includeCompanyName?: boolean;
  openGraphImage?: SocialNetworkImage | null;
  twitterImage?: SocialNetworkImage | null;
}

const siteName = "The Green Vintage Events";

export async function generateMetadataByLocale({
  locale,
  section,
  tail,
  subtitle,
  metaTitle,
  metaDescription,
  includeCompanyName = true,
  openGraphImage,
  twitterImage,
}: GenerateMetadataArgs): Promise<Metadata> {
  const languages = locales.reduce<Record<string, string>>((memo, language) => {
    memo[language] = nl(language)(section);

    return memo;
  }, {});

  const xDefault = { "x-default": nl(defaultLocale)(section) };

  const canonical = tail ? tail : nl(locale)(section);

  const alternates: AlternateURLs = {
    canonical,
    languages: !tail ? { ...languages, ...xDefault } : {},
  };

  const defaultMetaTitle = compact([
    includeCompanyName ? "The Green Vintage Events" : null,
    subtitle,
  ]).join(" - ");

  return {
    title: metaTitle ?? defaultMetaTitle,
    description: metaDescription ?? tl(locale)("footer.description"),
    metadataBase: new URL("https://www.thegreenvintage.com"),
    alternates,
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      images: [
        openGraphImage
          ? openGraphImage
          : "https://www.thegreenvintage.com/assets/img/the_green_vintage_og.jpg",
      ],
      siteName,
    },
    twitter: {
      title: metaTitle ?? defaultMetaTitle,
      description: metaDescription ?? tl(locale)("footer.description"),
      images: [
        twitterImage
          ? twitterImage
          : "https://www.thegreenvintage.com/assets/img/the_green_vintage_og.jpg",
      ],
    },
    icons: {
      apple: [
        {
          url: "/assets/img/favicon/apple-touch-icon.png",
          sizes: "180x180",
        },
      ],
      icon: [
        {
          url: "/assets/img/favicon/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          url: "/assets/img/favicon/favicon-16x16.png",
          sizes: "16x16",
        },
      ],
    },
    other: {
      "dns-prefetch": [
        "https://assets.thegreenvintage.com",
        "https://stats.thegreenvintage.com",
        "https://strapi.thegreenvintage.com",
      ],
    },
  };
}
