import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("width", "180");
    expect(logo).toHaveAttribute("height", "38");
    expect(logo).toHaveAttribute("priority", "true");
  });

  it("renders the getting started instructions", () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/)).toBeInTheDocument();
    expect(screen.getByText("src/app/page.tsx")).toBeInTheDocument();
    expect(
      screen.getByText("Save and see your changes instantly."),
    ).toBeInTheDocument();
  });

  it("renders the deploy button with correct attributes", () => {
    render(<Home />);
    const deployButton = screen.getByRole("link", { name: /Deploy now/i });
    expect(deployButton).toHaveAttribute(
      "href",
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    );
    expect(deployButton).toHaveAttribute("target", "_blank");
    expect(deployButton).toHaveAttribute("rel", "noopener noreferrer");
    const vercelLogo = screen.getByAltText("Vercel logomark");
    expect(vercelLogo).toBeInTheDocument();
    expect(vercelLogo).toHaveAttribute("width", "20");
    expect(vercelLogo).toHaveAttribute("height", "20");
  });

  it("renders the docs link with correct attributes", () => {
    render(<Home />);
    const docsLink = screen.getByRole("link", { name: "Read our docs" });
    expect(docsLink).toHaveAttribute(
      "href",
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    );
    expect(docsLink).toHaveAttribute("target", "_blank");
    expect(docsLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders footer links with correct attributes and icons", () => {
    render(<Home />);
    // Learn link
    const learnLink = screen.getByRole("link", { name: /Learn/i });
    expect(learnLink).toHaveAttribute(
      "href",
      "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    );
    const fileIcon = screen.getByAltText("File icon");
    expect(fileIcon).toHaveAttribute("width", "16");
    expect(fileIcon).toHaveAttribute("height", "16");
    expect(fileIcon).toHaveAttribute("aria-hidden", "true");

    // Examples link
    const examplesLink = screen.getByRole("link", { name: /Examples/i });
    expect(examplesLink).toHaveAttribute(
      "href",
      "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    );
    const windowIcon = screen.getByAltText("Window icon");
    expect(windowIcon).toHaveAttribute("width", "16");
    expect(windowIcon).toHaveAttribute("height", "16");
    expect(windowIcon).toHaveAttribute("aria-hidden", "true");

    // Nextjs.org link
    const nextjsLink = screen.getByRole("link", { name: /Go to nextjs.org/i });
    expect(nextjsLink).toHaveAttribute(
      "href",
      "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    );
    const globeIcon = screen.getByAltText("Globe icon");
    expect(globeIcon).toHaveAttribute("width", "16");
    expect(globeIcon).toHaveAttribute("height", "16");
    expect(globeIcon).toHaveAttribute("aria-hidden", "true");
  });

  it("renders the page structure correctly", () => {
    render(<Home />);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
    expect(screen.getByTestId("main-content")).toBeInTheDocument();
    expect(screen.getByTestId("next-logo")).toBeInTheDocument();
    expect(screen.getByTestId("instructions")).toBeInTheDocument();
    expect(screen.getByTestId("cta-buttons")).toBeInTheDocument();
    expect(screen.getByTestId("deploy-button")).toBeInTheDocument();
    expect(screen.getByTestId("docs-button")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("learn-link")).toBeInTheDocument();
    expect(screen.getByTestId("examples-link")).toBeInTheDocument();
    expect(screen.getByTestId("nextjs-link")).toBeInTheDocument();
  });
});
