import { render, screen } from "@testing-library/react";
import NoResults from "components/NoResults";

const name = "NoResults -->";
const title = "Title";

const setRender = () => <NoResults title={title} />;

describe(`${name} testing suite`, () => {
  it(`${name} Does it have the right value`, () => {
    render(setRender());

    const element = screen.getByText(`${title}`);
    expect(element).toBeInTheDocument();
  });
});
