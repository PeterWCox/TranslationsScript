const fs = require("fs");
const path = require("path");

// Import the object from the external file
const inputObject = require("C:\\git\\TranslationsScript\\i18ndata\\en\\core.js"); // Update with the correct path

// Function to recursively sort object keys
const sortObjectKeys = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeys);
  }

  const sortedObj = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sortedObj[key] = sortObjectKeys(obj[key]);
    });

  return sortedObj;
};

// Sort the object keys
const sortedObject = sortObjectKeys(inputObject);

// Add the copyright comment and export line to the sorted object
const finalOutput = `// Copyright (c) Leo RegTech Limited. All rights reserved.\n\nexport default ${JSON.stringify(
  sortedObject,
  null,
  2
)};`;

// Define the output file path
const outputPath = path.join(__dirname, "path", "to", "output", "file.js");

// Write the sorted object to a new file
fs.writeFileSync(outputPath, finalOutput);

console.log(`Sorted object has been saved to ${outputPath}`);
