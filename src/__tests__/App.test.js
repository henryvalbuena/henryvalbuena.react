import React from "react";
import { render } from "@testing-library/react";
import App from "../containers/App";

describe("Renders", () => {
  it("Main renders", () => {
    const { getByText } = render(<App />);
    expect(getByText("Do you really want to know?")).toBeInTheDocument();
  });

  it("Red pill", () => {
    const { getByText } = render(<App />);
    expect(getByText("Red Pill")).toBeInTheDocument();
  });

  it("Blue pill", () => {
    const { getByText } = render(<App />);
    expect(getByText("Blue Pill")).toBeInTheDocument();
  });
});

describe("Not ready (lazy render)", () => {
  it("Red lazy rendered (not present)", () => {
    const { queryByText } = render(<App />);
    expect(queryByText("Projects")).toBeNull();
  });
  it("Blue lazy rendered (not present)", () => {
    const { queryByText } = render(<App />);
    expect(queryByText("A little about me")).toBeNull();
  });
});

it("Snapshot App", () => {
  expect(render(<App />)).toMatchSnapshot();
});
