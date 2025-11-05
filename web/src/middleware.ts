import { NextResponse, NextRequest } from "next/server";
import Negotiator from "negotiator";
import { locales, defaultLocale } from "@/lib/locale";

function getLocale(request: NextRequest) {
  const headers = {
    "accept-language":
      request.headers.get("accept-language") || "en-US,en;q=0.5",
  };
  const negotiator = new Negotiator({ headers });

  return negotiator.language([...locales]) ?? defaultLocale;
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/"],
};
