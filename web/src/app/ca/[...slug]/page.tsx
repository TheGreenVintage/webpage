import NotFound from "@/components/NotFound";
import { ca as locale } from "@/lib/locale";

export const dynamic = "force-static";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [];
}

export default async function Page() {
  return <NotFound locale={locale} />;
}
