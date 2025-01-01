import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8',
      all: true,
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100
    },
    environment: 'jsdom'
  }
});
