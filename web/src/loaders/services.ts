import { getClient } from "@/lib/apollo";
import { GetServicesDocument, GetServicesQuery } from "@/generated/graphql";

export type ContentType = NonNullable<
  GetServicesQuery["servicesPage"]
>["content"][number];

export const loader = async (locale: string) => {
  const { error, data } = await getClient().query<GetServicesQuery>({
    query: GetServicesDocument,
    variables: {
      locale,
    },
  });

  if (error || !data.servicesPage) throw new Error("Unable to load data");

  return data.servicesPage;
};
