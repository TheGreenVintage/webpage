import { Locale } from "./locale";

export function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export function getAlternativeText(text: string, locale: Locale): string {
  const match = text.match(/([^#]+)#([^#]+)#([^#]+)/);

  if (!match) {
    return text;
  }

  const [_, en, ca, es] = match;

  switch (locale) {
    case "ca":
      return ca;
    case "es":
      return es;
    default:
      return en;
  }
}
