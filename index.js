const fs = require("fs");
const path = require("path");

// Extract the text from the file
const fileText = fs.readFileSync(
  path.resolve(__dirname, "C:/git/TranslationsScript/i18ndata/en/core.js"),
  "utf8"
);

// console.log(fileText);

// Use a regular expression to extract the object
const objectRegex = /export default (\{[\s\S]*?\});/;

// Match the regex in the input text
const match = fileText.match(objectRegex);
const extractedObjectString = match[1];
const extractedObject = eval(`(${extractedObjectString})`);

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
const sortedObject = sortObjectKeys(extractedObject);

//Remove the parenthesesis from the object keys
const removeParenthesis = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(removeParenthesis);
  }

  const sortedObj = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sortedObj[key.replace(/[\(\)]/g, "")] = removeParenthesis(obj[key]);
    });

  return sortedObj;
};

const finalObject = removeParenthesis(sortedObject);

const { exec } = require("child_process");

// Add the copyright comment and export line to the sorted object
const finalOutput = `// Copyright (c) Leo RegTech Limited. All rights reserved.\n\nexport default ${JSON.stringify(
  finalObject,
  null,
  2
)};`;

// Define the output file path
const outputPath = "C:\\git\\TranslationsScript\\output.js";

// Write the sorted object to a new file
fs.writeFileSync(outputPath, finalOutput);

const prettier = require("prettier");

// Run Prettier command
exec(`npx prettier --write ${outputPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Prettier output an error: ${stderr}`);
    return;
  }
  console.log(`Prettier successfully formatted ${outputPath}`);
});
