const fs = require("fs");
const csv = require("csv-parser");

const parseCSV = async (filepath) => {
  const results = [];

  return new Promise((resolve) => {
    fs.createReadStream(filepath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      });
  });
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imgproxyLoader.ts",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "strapi.thegreenvintage.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  headers: async () => {
    return [
      {
        source: "/.well-known/traffic-advice",
        headers: [
          { key: "Content-Type", value: "application/trafficadvice+json" },
        ],
      },
    ];
  },
  redirects: async () => {
    const redirects = await parseCSV("redirects.csv");

    console.log(`Loaded ${redirects.length} redirects!`);

    const staticRedirect = redirects
      .filter(({ destination }) => !!destination)
      .map(({ source, destination }) => {
        const cleanSource = source.replace(/\/$/, "");
        const cleanDestination = destination.replace(/\/$/, "");

        return {
          source: cleanSource,
          destination: cleanDestination,
          permanent: true,
        };
      });

    const dynamicRedirect = [
      {
        source: "/es/blog/:year/:month/:day/:slug\\.html",
        destination: "/es/blog/:year/:month/:day/:slug",
        permanent: true,
      },
    ];

    return [...staticRedirect, ...dynamicRedirect];
  },
};

module.exports = nextConfig;
