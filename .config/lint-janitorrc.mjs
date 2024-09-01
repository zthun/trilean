const generated = [
  "**/CHANGELOG.md",
  "packages/**/dist/**",
  "packages/**/docs/**",
  "node_modules/**",
  "packages/**/node_modules/**",
  "package-lock.json",
  ".yarnrc.yml",
];
const partialGenerated = ["cspell.json", "lerna.json"];

const esFiles = ["*.ts", "packages/**/src/**/*.ts", "packages/**/src/**/*.mts"];
const markdownFiles = ["*.md", "packages/**/*.md"];
const jsonFiles = ["*.json", "packages/**/*.json"];
const yamlFiles = [".circleci/config.yml"];
const prettyFiles = []
  .concat(esFiles)
  .concat(markdownFiles)
  .concat(jsonFiles)
  .concat(yamlFiles);
const spellingFiles = []
  .concat(esFiles)
  .concat(markdownFiles)
  .concat(jsonFiles)
  .concat(yamlFiles);

const esFilesExclude = generated;
const markdownFilesExclude = generated;
const jsonFilesExclude = generated;
const yamlFilesExclude = generated;
const prettyFilesExclude = generated.concat(partialGenerated);
const spellingFilesExclude = generated.concat(partialGenerated);

export default {
  esFiles,
  esFilesExclude,
  markdownFiles,
  markdownFilesExclude,
  jsonFiles,
  jsonFilesExclude,
  yamlFiles,
  yamlFilesExclude,
  prettyFiles,
  prettyFilesExclude,
  spellingFiles,
  spellingFilesExclude,
};
