import React from "react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { App } from "App";

const badRoute = "/some/some/madrid";

it("Landing on a bad page", () => {
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  const element = screen.getByText("TAKE ME BACK");
  expect(element).toBeInTheDocument();
});

it("Rendering not found image when on a bad page", () => {
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  const imgElement = screen.getByAltText("not found img");
  expect(imgElement).toHaveAttribute("src", "404.jpg");
});
