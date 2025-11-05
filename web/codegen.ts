import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    [`${process.env.STRAPI_SERVER_URL}/graphql`]: {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
    },
  },
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
  config: {
    enumsAsTypes: true,
  },
};

export default config;
