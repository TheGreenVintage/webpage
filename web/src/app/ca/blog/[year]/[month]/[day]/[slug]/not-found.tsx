import NotFound from "@/components/NotFound";
import { ca as locale } from "@/lib/locale";

export default async function Page() {
  return <NotFound locale={locale} />;
}
