import React from "react";

import Layout from "@/components/Layout";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { en as locale } from "@/lib/locale";

export async function generateMetadata() {
  return generateMetadataByLocale({
    locale,
    section: "home",
  });
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <Layout locale={locale}>{children}</Layout>;
}
