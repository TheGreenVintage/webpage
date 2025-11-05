const fs = require("fs");
const path = require("path");
const lodash = require("lodash");

const routesFile = "routes.txt";
const baseDirectory = "src/app"; // Base directory for creating folders

// Read the routes.txt file
fs.readFile(routesFile, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading ${routesFile}: ${err}`);
    return;
  }

  // Split the file contents into lines
  const lines = data.split("\n");

  lines.forEach((line) => {
    // Trim leading/trailing spaces from each line
    line = line.trim();

    // Skip lines that are empty or start with '#' (commented)
    if (line === "" || line.startsWith("#")) {
      return;
    }

    // Create folders recursively
    const folders = line.split("/");
    let currentPath = path.join(baseDirectory);

    folders.forEach((folder) => {
      currentPath = path.join(currentPath, folder);

      // Check if the folder already exists
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath);

        const pageFile = path.join(currentPath, "page.tsx");
        if (!fs.existsSync(pageFile)) {
          const folderName = path.basename(currentPath);
          const pageContent = generatePageContent(folderName);
          fs.writeFileSync(pageFile, pageContent);
          console.log(`Created ${pageFile}`);
        }
      }
    });
  });
});

// Generate the content for 'page.tsx' file
function generatePageContent(folderName) {
  // Sanitize folder name to contain only valid JavaScript function name characters
  const sanitizedFolderName = lodash.capitalize(
    lodash.camelCase(folderName.replace(/[^a-zA-Z-]/g, "")),
  );

  return `import React from 'react';
import Header from '@/components/Header';

function ${sanitizedFolderName}() {
  return (
    <div>
      <h1>Welcome to ${folderName}!</h1>
      <Header />
    </div>
  );
}

export default ${sanitizedFolderName};`;
}
