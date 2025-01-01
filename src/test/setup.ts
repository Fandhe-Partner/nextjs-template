import { cleanup } from "@testing-library/react";
import { afterEach, type expect } from "vitest";
import "@testing-library/jest-dom";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { vi } from "vitest";

// Mock React for all tests
vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    default: { ...actual, createElement: actual.createElement },
  };
});

declare module "vitest" {
  interface Assertion
    extends TestingLibraryMatchers<typeof expect.stringContaining, unknown> {}
}

// Cleanup after each test
afterEach(() => {
  cleanup();
});
