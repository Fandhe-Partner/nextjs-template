import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Button } from "./index";

describe("Button", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies primary variant by default", () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByText("Default Button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("primary");
  });

  it("applies correct variant class", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText("Secondary Button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("secondary");
  });

  it("merges additional className", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByText("Custom Button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("primary");
    expect(button).toHaveClass("custom-class");
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    const button = screen.getByText("Clickable");
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>,
    );

    const button = screen.getByText("Disabled Button");
    await user.click(button);

    expect(button).toBeDisabled();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders outline variant correctly", () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByText("Outline Button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("outline");
  });
});
