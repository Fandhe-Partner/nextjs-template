import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      all: true,
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
      exclude: [".next/**", "node_modules/**"],
    },
    environment: "happy-dom",
    exclude: [".next/**", "node_modules/**"],
    setupFiles: ["./src/test/setup.ts"],
  },
});
