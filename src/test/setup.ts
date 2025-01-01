import "@testing-library/jest-dom";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import type { ImageProps } from "next/image";
import React from "react";
import type { expect } from "vitest";
import { afterEach, vi } from "vitest";

// Mock CSS modules
vi.mock("\\.module\\.scss$", () => {
  return new Proxy(
    {},
    {
      get: function getter(target, key) {
        // Convert Symbol or other types to string and handle CSS module naming
        const stringKey = String(key);
        // Get the module name from the file path (e.g., 'page' from 'page.module.scss')
        const moduleName = "page";
        // Return class names in the format that Next.js CSS modules use
        return `${moduleName}_${stringKey}__hash`;
      },
    },
  );
});

// Mock Next.js Image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height, priority, ...props }: ImageProps) => {
    // Only spread valid HTML attributes, include priority as a boolean attribute if true
    return React.createElement("img", {
      src,
      alt,
      width,
      height,
      ...(priority ? { priority: "" } : {}),
      ...props,
    });
  },
}));

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
