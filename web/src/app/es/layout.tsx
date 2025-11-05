import React from "react";

import Layout from "@/components/Layout";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { es as locale } from "@/lib/locale";

export async function generateMetadata() {
  return generateMetadataByLocale({
    locale,
    section: "home",
  });
}

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <Layout locale={locale}>{children}</Layout>;
}
