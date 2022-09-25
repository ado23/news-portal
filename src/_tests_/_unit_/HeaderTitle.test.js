import { render, screen } from "@testing-library/react";
import HeaderTitle from "components/HeaderTitle";

const name = "HeaderTitle -->";
const title = "Title";

const setRender = () => <HeaderTitle title={title} />;

describe(`${name} testing suite`, () => {
  it(`${name} Does the component render`, () => {
    render(setRender());

    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });

  it(`${name} Does it have the right value`, () => {
    render(setRender());

    const element = screen.getByText(`#${title}`);
    expect(element).toBeInTheDocument();
  });
});
