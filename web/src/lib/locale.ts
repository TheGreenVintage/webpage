// Global locales

export const en = "en";
export const ca = "ca";
export const es = "es";

export const defaultLocale = en;

export const locales = [en, ca, es] as const;

export type Locale = (typeof locales)[number];

const translations = {
  en: {
    flags: {
      ca: "Catalan",
      en: "English",
      es: "Spanish",
    },
    other: {
      open_video: "Open video",
      open_menu: "Open menu",
      close_menu: "Close menu",
    },
    team: {
      title: "Our team",
      description:
        "Our team is incredibly disciplined. We believe that discipline is the key to success in any endeavor. Each member is committed to their roles, adhering to deadlines, and maintaining high standards. This discipline allows us to tackle challenges with focus and determination, ensuring we achieve our goals effectively and efficiently.",
    },
    sections: {
      home: "Home",
      projects: "Projects",
      team: "About us",
      members: "Team",
      manifest: "Manifest",
      sustainability: "Sustainability",
      services: "Services",
      subservices: {
        "team-building": "Team buildings",
        "receptive-trips": "Receptive trips",
        "corporative-parties": "Corporatives parties",
        "business-events": "Business events",
      },
      blog: "Blog",
      contact: "Contact",
      terms: "Terms and conditions",
      legal: "Legal notice",
    },
    projects: {
      information: "Information",
    },
    "team-building": {
      information: "Information",
      pax: "Minimum of people",
      duration: "Duration",
      languages: "Languages",
      languages_values: {
        en: "English",
        es: "Spanish",
        ca: "Catalan",
        fr: "French",
        it: "Italian",
      },
      accessible: "Accessible",
      accessible_yes: "Yes",
      accessible_no: "No",
      localization: "Localization",
      other: "Other team building activities",
      other_description:
        "Discover other related team building activities and let your imagination run wild!",
    },
    "receptive-trips": {
      title: "Receptive trips",
    },
    blog: {
      title: "Blog",
      description:
        "Welcome to The Green Vintage Blog! Discover expert tips, trends, and inspiration for unforgettable events. From corporate team-building experiences to grand celebrations, we create moments that bring people together!",
      read_more: "Read more",
      recent_posts: "Recent posts",
      related_posts: "Related posts",
      page: "Page",
    },
    contact: {
      phone: "Phone",
      email: "Email",
      location: "Location",
      follow_us: "Follow us",
      success: {
        pretitle: "Thank you for contacting us",
        title: "Your message has been sent",
        description: "We will get back to you as soon as possible.",
      },
      form: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Submit",
        sending: "Sending...",
      },
    },
    us: {
      name: "The Green Vintage Events",
      telephone1: "(+34) 679 400 576",
      telephone2: "(+34) 644 282 929",
      email: "info@thegreenvintage.com",
      address:
        "Carrer de la Indústria, 312, ESC H 2-D Badalona, Barcelona 08912",
      postalAddress: {
        streetAddress: "Carrer de la Indústria, 312, ESC H 2-D",
        addressLocality: "Badalona",
        addressRegion: "Barcelona",
        postalCode: "08912",
        addressCountry: "ES",
      },
      maps: "https://www.google.com/maps/place/C%2F+de+la+Ind%C3%BAstria,+312,+ESC+H+2-D,+08912+Badalona,+Barcelona",
      request_budget: "Request a quote",
    },
    privacy: {
      title: "Privacy",
    },
    terms: {
      title: "Terms and conditions",
    },
    footer: {
      description:
        "In The Green Vintage, we transform your corporate events and team buildings activities into memorable and vibrant experiences. Discover more!",
      phone: "Phone",
      email: "Email",
      location: "Location",
      legal: "Legal notice",
      terms: "Terms and conditions",
      contact: "Contact",
      get_in_touch: "Get in touch",
      services: "Services",
      company: "Company",
      all_rights: "All Rights Reserved",
    },
    not_found: {
      title: "Page not found!",
      description:
        "The page you were looking for could not be found. Please return to the home page.",
      back: "Back to home page",
    },
  },
  es: {
    flags: {
      ca: "Catalán",
      en: "Inglés",
      es: "Castellano",
    },
    other: {
      open_video: "Abrir vídeo",
      open_menu: "Abrir menú",
      close_menu: "Cerrar menú",
    },
    team: {
      title: "Nuestro equipo",
      description:
        "Nuestro equipo es sumamente disciplinado. Creemos que la disciplina es la clave del éxito en cualquier emprendimiento. Cada miembro está comprometido con sus funciones, cumpliendo con los plazos y manteniendo altos estándares. Esta disciplina nos permite enfrentar desafíos con enfoque y determinación, asegurando que alcancemos nuestros objetivos de manera efectiva y eficiente.",
    },
    sections: {
      home: "Inicio",
      projects: "Proyectos",
      team: "Nosotros",
      members: "Equipo",
      manifest: "Manifesto",
      sustainability: "Sostenibilidad",
      services: "Servicios",
      subservices: {
        "team-building": "Team buildings",
        "receptive-trips": "Viajes de receptivo",
        "corporative-parties": "Fiestas corporativas",
        "business-events": "Eventos corporativos",
      },
      blog: "Blog",
      contact: "Contacto",
      terms: "Términos y condiciones",
      legal: "Aviso legal",
    },
    projects: {
      information: "Información",
    },
    "team-building": {
      information: "Información",
      pax: "Mínimo de personas",
      duration: "Duración",
      languages: "Idiomas",
      languages_values: {
        en: "Inglés",
        es: "Castellano",
        ca: "Catalán",
        fr: "Francés",
        it: "Italiano",
      },
      accessible: "Accessible",
      accessible_yes: "Sí",
      accessible_no: "No",
      localization: "Localización",
      other: "Otras actividades de team building",
      other_description:
        "¡Descubre otras actividades de team building relacionadas y haz volar tu imaginación!",
    },
    "receptive-trips": {
      title: "Viajes de receptivo",
    },
    blog: {
      title: "Blog",
      description:
        "¡Bienvenido al blog de The Green Vintage! Descubre consejos, tendencias e inspiración para eventos inolvidables. Desde experiencias de team building corporativo hasta grandes celebraciones, creamos momentos que unen a las personas.",
      read_more: "Leer más",
      recent_posts: "Entradas recientes",
      related_posts: "Entradas relacionadas",
      page: "Página",
    },
    contact: {
      phone: "Teléfono",
      email: "Correo electrónico",
      location: "Dirección",
      follow_us: "Síguenos",
      success: {
        pretitle: "Gracias por contactarnos",
        title: "Tu mensaje ha sido enviado",
        description: "Nos pondremos en contacto contigo lo antes posible.",
      },
      form: {
        name: "Nombre",
        phone: "Teléfono",
        email: "Correo electrónico",
        subject: "Título",
        message: "Mensaje",
        submit: "Enviar",
        sending: "Enviando...",
      },
    },
    us: {
      name: "The Green Vintage Events",
      telephone1: "(+34) 679 400 576",
      telephone2: "(+34) 644 282 929",
      email: "info@thegreenvintage.com",
      address:
        "Carrer de la Indústria, 312, ESC H 2-D Badalona, Barcelona 08912",
      postalAddress: {
        streetAddress: "Carrer de la Indústria, 312, ESC H 2-D",
        addressLocality: "Badalona",
        addressRegion: "Barcelona",
        postalCode: "08912",
        addressCountry: "ES",
      },
      maps: "https://www.google.com/maps/place/C%2F+de+la+Ind%C3%BAstria,+312,+ESC+H+2-D,+08912+Badalona,+Barcelona",
      request_budget: "Pedir presupuesto",
    },
    privacy: {
      title: "Privacidad",
    },
    terms: {
      title: "Términos y condiciones",
    },
    footer: {
      description:
        "En The Green Vintage Events transformamos tus eventos corporativos y actividades de team building en experiencias memorables y vibrantes. ¡Descúbrelo!",
      phone: "Teléfono",
      email: "Correo electrónico",
      location: "Dirección",
      legal: "Aviso legal",
      terms: "Términos y condiciones",
      contact: "Contacto",
      get_in_touch: "Contáctenos",
      services: "Servicios",
      company: "Empresa",
      all_rights: "Todos los derechos reservados",
    },
    not_found: {
      title: "Página no encontrada!",
      description:
        "La página que buscabas no se ha encontrado. Por favor, vuelve a la página de inicio.",
      back: "Volver a la página de inicio",
    },
  },
  ca: {
    flags: {
      ca: "Català",
      en: "Anglès",
      es: "Castellà",
    },
    other: {
      open_video: "Obrir vídeo",
      open_menu: "Obrir menú",
      close_menu: "Tancar menú",
    },
    team: {
      title: "El nostre equip",
      description:
        "El nostre equip és increïblement disciplinat. Creiem que la disciplina és la clau de l'èxit en qualsevol empresa. Cada membre està compromès amb les seves funcions, complint els terminis i mantenint alts estàndards. Aquesta disciplina ens permet afrontar reptes amb focus i determinació, assegurant que aconseguim els nostres objectius de manera efectiva i eficient.",
    },
    sections: {
      home: "Inici",
      projects: "Projectes",
      team: "Nosaltres",
      members: "Equip",
      manifest: "Manifest",
      sustainability: "Sostenibilitat",
      services: "Serveis",
      subservices: {
        "team-building": "Team buildings",
        "receptive-trips": "Viatges de receptiu",
        "corporative-parties": "Festes corporatives",
        "business-events": "Esdeveniments corporatius",
      },
      blog: "Blog",
      contact: "Contacte",
      terms: "Termes i condicions",
      legal: "Avís legal",
    },
    projects: {
      information: "Informació",
    },
    "team-building": {
      information: "Informació",
      pax: "Mínim de persones",
      duration: "Duració",
      languages: "Idiomes",
      languages_values: {
        en: "Anglès",
        es: "Castellà",
        ca: "Català",
        fr: "Francès",
        it: "Italià",
      },
      accessible: "Accessible",
      accessible_yes: "Si",
      accessible_no: "No",
      localization: "Localizació",
      other: "Altres activitats de team building",
      other_description:
        "Descobreix altres activitats de team building relacionades i fes volar la teva imaginació!",
    },
    "receptive-trips": {
      title: "Viatges de receptiu",
    },
    blog: {
      title: "Blog",
      description:
        "Benvinguts al blog de The Green Vintage! Descobreix consells, tendències i inspiració per a esdeveniments inoblidables. Des d’experiències de team building corporatiu fins a grans celebracions, creem moments que uneixen les persones!",
      read_more: "Llegir més",
      recent_posts: "Entrades recents",
      related_posts: "Entrades relacionades",
      page: "Pàgina",
    },
    contact: {
      phone: "Telèfon",
      email: "Correu electrònic",
      location: "Localització",
      follow_us: "Segueix-nos",
      success: {
        pretitle: "Gràcies per contactar-nos",
        title: "El teu missatge ha estat enviat",
        description: "Ens posarem en contacte amb tu el més aviat possible.",
      },
      form: {
        name: "Nom",
        phone: "Telèfon",
        email: "Correu electrònic",
        subject: "Títol",
        message: "Missatge",
        submit: "Enviar",
        sending: "Enviant...",
      },
    },
    us: {
      name: "The Green Vintage Events",
      telephone1: "(+34) 679 400 576",
      telephone2: "(+34) 644 282 929",
      email: "info@thegreenvintage.com",
      address:
        "Carrer de la Indústria, 312, ESC H 2-D Badalona, Barcelona 08912",
      postalAddress: {
        streetAddress: "Carrer de la Indústria, 312, ESC H 2-D",
        addressLocality: "Badalona",
        addressRegion: "Barcelona",
        postalCode: "08912",
        addressCountry: "ES",
      },
      maps: "https://www.google.com/maps/place/C%2F+de+la+Ind%C3%BAstria,+312,+ESC+H+2-D,+08912+Badalona,+Barcelona",
      request_budget: "Demanar pressupost",
    },
    privacy: {
      title: "Privacitat",
    },
    terms: {
      title: "Termes i condicions",
    },
    footer: {
      description:
        "A The Green Vintage Events transformem els teus esdeveniments corporatius i activitats de team building en experiències memorables i vibrants. Descobreix-ho!",
      phone: "Telèfon",
      email: "Email",
      location: "Localització",
      legal: "Avís legal",
      terms: "Termes i condicions",
      contact: "Contacte",
      get_in_touch: "Contacta'ns",
      services: "Serveis",
      company: "Empresa",
      all_rights: "Tots els drets reservats",
    },
    not_found: {
      title: "Pàgina no trobada!",
      description:
        "No s'ha trobat la pàgina que estaves buscant. Si us plau, torna a la pàgina d'inici.",
      back: "Tornar a la pàgina d'inici",
    },
  },
} as const;

function t(locale: keyof typeof translations, key: string) {
  const fullkey = `${locale}.${key}`;
  const steps = fullkey.split(".");

  let currentTranslations: any = translations;

  for (const step of steps) {
    currentTranslations = currentTranslations[step] as any;

    if (typeof currentTranslations === "string") return currentTranslations;
  }

  throw new Error(`Translation not found with key ${fullkey}`);
}

export function tl(locale: keyof typeof translations) {
  return (key: string) => t(locale, key);
}
