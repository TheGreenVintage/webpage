import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const cacheTag = "apollo";

export const revalidate = 604800; // 60 * 60 * 24 * 7;

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.STRAPI_SERVER_URL}/graphql`,
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
      fetchOptions: {
        next: { revalidate, tags: [cacheTag] },
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        UploadFile: {
          fields: {
            url: {
              read(url) {
                if (url.at(0) !== "/") return url;

                return process.env.STRAPI_SERVER_URL + url;
              },
            },
          },
        },
      },
    }),
  });
});
