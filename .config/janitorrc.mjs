import {
  ZJanitorOptionsBuilder,
  ZJanitorOptionsLintBuilder,
} from "@zthun/janitor-options";

const lint = new ZJanitorOptionsLintBuilder()
  .esFile("*.{js,cjs,mjs,ts,mts}")
  .esFile("packages/**/src/**/*.{js,cjs,mjs,ts,mts}")
  .markdownFile("*.md")
  .markdownFile("packages/**/*.md")
  .jsonFile("*.json", "packages/**/*/json")
  .yamlFile(".circleci/config.yml")
  .generatePrettyFiles()
  .generateSpellingFiles()
  .excludeAll("**/CHANGELOG.md")
  .excludeAll("packages/**/dist/**")
  .excludeAll("packages/**/docs/**")
  .excludeAll("node_modules/**")
  .excludeAll("packages/**/node_modules/**")
  .excludeAll("package-lock.json")
  .excludeAll(".yarnrc.yml")
  .excludeAll("cspell.json")
  .excludeAll("lerna.json")
  .build();
export default new ZJanitorOptionsBuilder().lint(lint).build();
