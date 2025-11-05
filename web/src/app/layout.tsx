import { generateMetadataByLocale } from "@/lib/generateMetadata";
import { defaultLocale as locale } from "@/lib/locale";
import "./globals.css";

export async function generateMetadata() {
  return generateMetadataByLocale({
    locale,
    section: "home",
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
