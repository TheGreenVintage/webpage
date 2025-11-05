import ContactSent from "@/components/ContactSent";
import { en as locale } from "@/lib/locale";

export default async function Page() {
  return <ContactSent locale={locale} />;
}
