import ContactSent from "@/components/ContactSent";
import { ca as locale } from "@/lib/locale";

export default async function Page() {
  return <ContactSent locale={locale} />;
}
