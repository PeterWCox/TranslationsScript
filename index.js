const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const objectRegex = /export default (\{[\s\S]*?\});/;

const importBase = "C:\\git\\TranslationsScript\\i18ndata\\";
const exportBase = "C:\\git\\TranslationsScript\\i18ndatasorted\\";
const langCodes = ["en", "fr"];
const fileNames = [
  "core.js",
  "dashboard.js",
  //   "index.js",
  //   "module.js",
  //   "pa-dealings.js",
  //   "permissions.js",
  //   "registers.js",
  //   "report-editor.js",
  //   "settings.js",
  //   "templates.js",
  //   "twoFactor.js",
];

langCodes.forEach((langCode) => {
  fileNames.forEach((fileName) => {
    const inputPath = `${importBase}${langCode}\\${fileName}`;
    console.log(inputPath);
    const outputPath = `${exportBase}${langCode}\\${fileName}`;
    console.log(outputPath);
    createSortedFile(inputPath, outputPath);
  });
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
