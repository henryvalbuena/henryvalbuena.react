import React from "react";
import { render } from "@testing-library/react";
import Blue from "../containers/Blue";

describe("Renders", () => {
  it("Has <h1> tags", () => {
    const { getByText } = render(<Blue />);
    expect(getByText("A little about me")).toBeInTheDocument();
  });

  it("Has Projects", () => {
    const { getByText } = render(<Blue />);
    expect(getByText("Most recent projects")).toBeInTheDocument();
  });

  it("Has Interests", () => {
    const { getByText } = render(<Blue />);
    expect(getByText("Interests")).toBeInTheDocument();
  });
});

it("Snapshot Blue", () => {
  expect(render(<Blue />)).toMatchSnapshot();
});
