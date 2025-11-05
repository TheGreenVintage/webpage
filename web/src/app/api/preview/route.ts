import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") ?? "";
  const slug = url.searchParams.get("slug") ?? "";

  return redirect(`/${locale}/blog/0000/00/00/${slug}/preview`);
}
