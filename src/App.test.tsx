import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Home } from "../src/pages/Home";
import { DiscoverInsurance } from "./components/DiscoverInsurance/DiscoverInsurance";

test("renders turners insurance page", () => {
  render(<DiscoverInsurance alignment={""} />);
  const linkElement = screen.getByText(/Are you after car insurance?/i);
  expect(linkElement).toBeInTheDocument();
});


