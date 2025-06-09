import { ZViteConfigBuilder } from "@zthun/janitor-build-config/vite";
import { defineConfig } from "vite";

export default defineConfig(new ZViteConfigBuilder().test().build());
