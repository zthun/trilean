import { ZTypedocConfigBuilder } from "@zthun/janitor-build-config/typedoc";

const config = new ZTypedocConfigBuilder()
  .web()
  .entry("../*")
  .name("Trilean")
  .favicon("public/images/svg/trilean.svg")
  .build();

export default config;
