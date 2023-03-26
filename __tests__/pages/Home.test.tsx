import Home from "@/app/page";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home Page", () => {
  it("Should display Hello Next", () => {
    render(<Home />);
    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent("Hello Next");
  });
});
