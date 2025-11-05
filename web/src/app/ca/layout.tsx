import React from "react";

import Layout from "@/components/Layout";
import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { ca as locale } from "@/lib/locale";

export async function generateMetadata() {
  return generateMetadataByLocale({
    locale,
    section: "home",
  });
}

export default function CaLayout({ children }: { children: React.ReactNode }) {
  return <Layout locale={locale}>{children}</Layout>;
}
