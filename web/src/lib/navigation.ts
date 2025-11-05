const domain = "https://www.thegreenvintage.com";
const navigation = {
  en: {
    projects: "projects",
    team: "team",
    manifest: "team/manifest",
    sustainability: "team/sustainability",
    services: "services",
    team_building: "team-building",
    "receptive-trips": "receptive-trips",
    "corporative-parties": "corporative-parties",
    "business-events": "business-events",
    blog: "blog",
    contact: "contact",
    contact_sent: "contact/sent",
    legal: "legal-notice",
    terms: "terms-and-conditions",
    home: "",
  },
  ca: {
    projects: "projectes",
    team: "equip",
    manifest: "equip/manifest",
    sustainability: "equip/sostenibilitat",
    services: "serveis",
    team_building: "team-building",
    "receptive-trips": "viatges-de-receptiu",
    "corporative-parties": "festes-corporatives",
    "business-events": "esdeveniments-corporatius",
    blog: "blog",
    contact: "contacte",
    contact_sent: "contacte/enviat",
    legal: "avis-legal",
    terms: "termes-i-condicions",
    home: "",
  },
  es: {
    projects: "proyectos",
    team: "equipo",
    manifest: "equipo/manifiesto",
    sustainability: "equipo/sostenibilidad",
    services: "servicios",
    team_building: "team-building",
    "receptive-trips": "viajes-de-receptivo",
    "corporative-parties": "fiestas-corporativas",
    "business-events": "eventos-corporativos",
    blog: "blog",
    contact: "contacto",
    contact_sent: "contacto/enviado",
    legal: "aviso-legal",
    terms: "terminos-y-condiciones",
    home: "",
  },
};

function n(locale: keyof typeof navigation, key: string) {
  const fullkey = `${locale}.${key}`;
  const steps = fullkey.split(".");

  if (!locale) throw new Error(`Locale not found with key ${fullkey}`);

  let currentNavigations: any = navigation;

  for (const step of steps) {
    currentNavigations = currentNavigations[step] as any;

    if (typeof currentNavigations === "string") return currentNavigations;
  }

  throw new Error(`Navigation not found with key ${fullkey}`);
}

export function nl(locale: keyof typeof navigation) {
  return (key: string, slug?: string) =>
    ["", ...[locale, n(locale, key), slug].filter(Boolean)].join("/");
}

export function np(locale: keyof typeof navigation) {
  return (date: Date, slug: string, includeDomain = false) => {
    const postDate = new Date(date);
    const year = postDate.getFullYear();
    const month = postDate.getMonth() + 1;
    const day = postDate.getDate();

    return [
      includeDomain ? domain : "",
      locale,
      n(locale, "blog"),
      year,
      String(month).padStart(2, "0"),
      String(day).padStart(2, "0"),
      slug,
    ]
      .flat()
      .join("/");
  };
}
