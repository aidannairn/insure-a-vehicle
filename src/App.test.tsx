import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Home } from "../src/pages/Home";

test("renders turners insurance page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Discover our insurances/i);
  expect(linkElement).toBeInTheDocument();
});

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
