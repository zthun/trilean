import {
  ZJanitorOptionsBuilder,
  ZJanitorOptionsLintBuilder,
} from "@zthun/janitor-options";

const lint = new ZJanitorOptionsLintBuilder()
  .commonEsFiles()
  .commonMarkdownFiles()
  .commonJsonFiles()
  .commonYamlFiles()
  .generatePrettyFiles()
  .generateSpellingFiles()
  .commonExcludes()
  .build();

export default new ZJanitorOptionsBuilder().lint(lint).build();
