import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import Main from "../containers/Main";

describe("Renders", () => {
  it("Main renders", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Main />
      </Router>
    );
    expect(getByText("Do you really want to know?")).toBeInTheDocument();
  });

  it("Red pill", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Main />
      </Router>
    );
    expect(getByText("Red Pill")).toBeInTheDocument();
  });

  it("Blue pill", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Main />
      </Router>
    );
    expect(getByText("Blue Pill")).toBeInTheDocument();
  });
});

describe("Not ready (lazy render)", () => {
  it("Red lazy rendered (not present)", () => {
    const history = createMemoryHistory();
    const { queryByText } = render(
      <Router history={history}>
        <Main />
      </Router>
    );
    expect(queryByText("Projects")).toBeNull();
  });
  it("Blue lazy rendered (not present)", () => {
    const history = createMemoryHistory();
    const { queryByText } = render(
      <Router history={history}>
        <Main />
      </Router>
    );
    expect(queryByText("A little about me")).toBeNull();
  });
});

it("Snapshot App", () => {
  const history = createMemoryHistory();
  expect(
    render(
      <Router history={history}>
        <Main />
      </Router>
    )
  ).toMatchSnapshot();
});
