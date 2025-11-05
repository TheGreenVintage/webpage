import fs from "fs/promises";
import path from "path";
import xml2js from "xml2js";
import prettier from "prettier";

const rightCase = (filename: string): string =>
  filename
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
    .replace(/[-_\s]+/g, "");

const builder = new xml2js.Builder();

const saveIcon = (
  directory: string,
  file: string,
): Promise<{ id: string; name: string; content: string }> => {
  return new Promise(async (resolve, reject) => {
    const filepath = path.join(directory, file);
    const content = await fs.readFile(filepath, "utf8");

    xml2js.parseString(content, (err: Error | null, result: any) => {
      if (err) {
        return reject(err);
      }

      delete result.svg["$"].id;
      delete result.svg["$"]["xmlns:svg"];
      delete result.svg["$"]["data-name"];

      result.svg["$"]["width"] = 48;
      result.svg["$"]["height"] = 48;
      result.svg["$"]["style"] = "STYLE";

      const header = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
      const style = '{{ fill: "var(--clr-theme-1)" }}';

      const componentContent = builder
        .buildObject(result)
        .replace(header, "")
        .replace('"STYLE"', style);

      const id = file.slice(0, -4).replaceAll("-", "_"); // Remove .svg extension
      const name = rightCase(file.slice(0, -4));

      const finalContent = `export const ${name} = () => (${componentContent});`;

      resolve({ id, name, content: finalContent });
    });
  });
};

const readSVGFiles = async (directory: string): Promise<void> => {
  try {
    const files = await fs.readdir(directory);
    const names: Record<string, string> = {};

    for (const file of files) {
      if (path.extname(file) === ".svg") {
        const { id, name, content } = await saveIcon(directory, file);

        const formattedContent = await prettier.format(content, {
          semi: false,
          parser: "babel",
        });

        fs.writeFile(
          path.join(directory, "..", `${name}.tsx`),
          formattedContent,
        );

        names[id] = name;
      }
    }

    const mainIconContent = `
${Object.values(names)
  .map((value) => `import { ${value} } from "./${value}";`)
  .join(`\n`)}

export type Icons =
${Object.keys(names)
  .map((key) => `  | "${key}"`)
  .join(`\n`)};

type Props = {
  name: Icons;
};

const Icon = ({ name }: Props) => {
  const catalog = {
${Object.entries(names)
  .map(([key, value]) => `    ${key}: ${value},`)
  .join(`\n`)}
  };

  return catalog[name as Icons] ? catalog[name as Icons]() : null;
};

export default Icon;
`;

    fs.writeFile(
      path.join(directory, "..", `index.tsx`),
      mainIconContent.trimStart(),
    );

    console.log("Strapi enum:\n");
    console.log(Object.keys(names).join(`\n`));
  } catch (error) {
    console.error("Error reading directory:", error);
  }
};

readSVGFiles(path.join(__dirname, "icons"));
