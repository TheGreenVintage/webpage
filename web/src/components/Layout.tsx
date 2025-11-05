import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";

import { Locale, tl } from "@/lib/locale";
import classNames from "classnames";
import Script from "next/script";
import "./index.scss";
import JsonLD from "./JsonLD";

import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/custom-animation.min.css";
import "../../public/assets/css/flaticon.min.css";
import "../../public/assets/css/fontawesome.min.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function Layout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const t = tl(locale);
  const jd = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "The Green Vintage Events",
    url: "https://www.thegreenvintage.com",
    logo: "https://www.thegreenvintage.com/assets/img/logo/logo-black.png",
    description: t("footer.description"),
    address: {
      "@type": "PostalAddress",
      streetAddress: t("us.postalAddress.streetAddress"),
      addressLocality: t("us.postalAddress.addressLocality"),
      addressRegion: t("us.postalAddress.addressRegion"),
      postalCode: t("us.postalAddress.postalCode"),
      addressCountry: t("us.postalAddress.addressCountry"),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: t("us.telephone1"),
        contactType: "customer service",
      },
      {
        "@type": "ContactPoint",
        telephone: t("us.telephone2"),
        contactType: "customer service",
      },
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={classNames(inter.className, poppins.className)}>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
        <JsonLD jd={jd} />
        <Script
          src="https://stats.thegreenvintage.com/js/script.tagged-events.js"
          data-domain="thegreenvintage.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
