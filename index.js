const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const objectRegex = /export default (\{[\s\S]*?\});/;

const importBase = "C:\\git\\TranslationsScript\\i18ndata copy\\";
const exportBase = "C:\\git\\TranslationsScript\\i18ndatasorted\\";
const langCodes = ["en", "fr"];
const fileNames = [
  "core.js",
  "dashboard.js",
  "index.js",
  "module.js",
  "pa-dealings.js",
  "permissions.js",
  "registers.js",
  "report-editor.js",
  "settings.js",
  "templates.js",
  "twoFactor.js",
];

//Sorting code
// langCodes.forEach((langCode) => {
//   fileNames.forEach((fileName) => {
//     const inputPath = `${importBase}${langCode}\\${fileName}`;
//     console.log(inputPath);
//     const outputPath = `${exportBase}${langCode}\\${fileName}`;
//     console.log(outputPath);
//     createSortedFile(inputPath, outputPath);
//   });
// });

fileNames.forEach((fileName) => {
  //Compare the 'en' and 'fr' files and check if there are:
  //1. Missing keys in 'fr' file
  //2. Any keys in 'fr' which contain **
  //3. Keys in 'en' file for which the value is not equal to the value in the 'fr' file

  const enPath = `${importBase}en\\${fileName}`;
  const frPath = `${importBase}fr\\${fileName}`;
  const enFileText = fs.readFileSync(path.resolve(__dirname, enPath), "utf8");
  const frFileText = fs.readFileSync(path.resolve(__dirname, frPath), "utf8");
  const enMatch = enFileText.match(objectRegex);
  const frMatch = frFileText.match(objectRegex);
  const enExtractedObjectString = enMatch[1];
  const frExtractedObjectString = frMatch[1];
  const enExtractedObject = eval(`(${enExtractedObjectString})`);
  const frExtractedObject = eval(`(${frExtractedObjectString})`);
  const enKeys = Object.keys(enExtractedObject);
  const frKeys = Object.keys(frExtractedObject);
  const missingKeys = enKeys.filter((key) => !frKeys.includes(key));
  const keysWithAsterisks = frKeys.filter((key) => key.includes("**"));
  const keysWithSamealues = enKeys.filter(
    (key) => enExtractedObject[key] === frExtractedObject[key]
  );

  //Log name of file
  console.log(fileName);
  console.log("Missing keys: ", missingKeys);
  console.log("Keys with asterisks: ", keysWithAsterisks);
  console.log("Keys with same values: ", keysWithSamealues);
  console.log("-------------------------------------------------");
});

function createSortedFile(originalPath, outputPath) {
  // Extract the text from the file
  const fileText = fs.readFileSync(
    path.resolve(__dirname, originalPath),
    "utf8"
  );

  //Regex stuff
  const match = fileText.match(objectRegex);
  const extractedObjectString = match[1];
  const extractedObject = eval(`(${extractedObjectString})`);
  const sortedObject = sortObjectKeys(extractedObject);
  const finalOutput = `// Copyright (c) Leo RegTech Limited. All rights reserved.\n\nexport default ${JSON.stringify(
    sortedObject,
    null,
    2
  )};`;

  // Write the sorted object to a new file
  fs.writeFileSync(outputPath, finalOutput);

  runPrettier(outputPath);
}

function sortObjectKeys(obj) {
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
}

function runPrettier(outputPath) {
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
}
