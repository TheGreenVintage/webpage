import ContactSent from "@/components/ContactSent";
import { es as locale } from "@/lib/locale";

export default async function Page() {
  return <ContactSent locale={locale} />;
}
