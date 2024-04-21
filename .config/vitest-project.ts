import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export function defineTest(environment?: 'node' | 'jsdom') {
  return defineConfig({
    plugins: [tsConfigPaths()],
    test: {
      environment,
      testTimeout: 30000
    }
  });
}
