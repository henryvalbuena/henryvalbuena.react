import React from "react";
import { render } from "@testing-library/react";
import Red from "../containers/Red";

describe("Renders", () => {
  it("Has <h1> tags", () => {
    const { getByText } = render(<Red />);
    expect(getByText("Welcome")).toBeInTheDocument();
    expect(getByText("Welcome To The Rabbit Hole")).toBeInTheDocument();
  });

  it("Has Projects", () => {
    const { getByText } = render(<Red />);
    expect(getByText("Projects")).toBeInTheDocument();
  });

  it("Has Interests", () => {
    const { getByText } = render(<Red />);
    expect(getByText("Interests")).toBeInTheDocument();
  });
});

it("Snapshot Red", () => {
  expect(render(<Red />)).toMatchSnapshot();
});
