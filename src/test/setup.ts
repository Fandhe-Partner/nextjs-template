import { cleanup } from "@testing-library/react";
import { afterEach, type expect } from "vitest";
import "@testing-library/jest-dom";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "vitest" {
  interface Assertion
    extends TestingLibraryMatchers<typeof expect.stringContaining, unknown> {}
}

// Cleanup after each test
afterEach(() => {
  cleanup();
});
