import React from "react";
import ImgproxyImage from "../../components/ImgproxyImage";
import Layout from "@/components/Layout";
import { en as locale } from "@/lib/locale";

export default async function Page() {
  return (
    <Layout locale={locale}>
      <ImgproxyImage
        src="https://strapi.thegreenvintage.com/uploads/IMG_20240614_122632_9c2793e8f4.jpg"
        alt="Description"
        width={800}
        height={600}
      />
    </Layout>
  );
}
