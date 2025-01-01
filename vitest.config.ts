import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      all: true,
      include: ["src/**"],
      exclude: [
        ".next/**",
        "node_modules/**",
        "**/*.stories.{js,jsx,ts,tsx}",
        "**/*.test.{js,jsx,ts,tsx}",
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
      reporter: ["text", "json-summary", "json"],
      reportOnFailure: true,
    },
    environment: "happy-dom",
    exclude: [".next/**", "node_modules/**"],
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
  },
});
