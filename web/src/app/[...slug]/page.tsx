import React from "react";
import Layout from "@/components/Layout";
import NotFound from "@/components/NotFound";
import { en as locale } from "@/lib/locale";

export const dynamic = "force-static";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [];
}

export default async function Page() {
  return (
    <Layout locale={locale}>
      <NotFound locale={locale} />
    </Layout>
  );
}
