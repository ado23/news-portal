import { render, screen, fireEvent } from "@testing-library/react";
import Search from "components/Search";

const name = "SearchComponent -->";

const handleKeyPressFunc = jest.fn();
const value = "";

const setRender = () => (
  <Search
    handleKeyPress={handleKeyPressFunc}
    placeholder="placeholder"
    width="99px"
    value={value}
  />
);

it(`${name} Does the main component render`, () => {
  render(setRender());

  const element = screen.getByTestId("search-component-main-div");
  expect(element).toBeInTheDocument();
});

it(`${name} Does the searchbar has right value`, () => {
  render(setRender());

  const element = screen.getByLabelText("Search");
  expect(element).toBeInTheDocument();
  expect(element).toHaveValue(value);
});

it(`${name} Does the searchbar fire on change function`, () => {
  const changedValue = "Changed value";
  render(setRender());

  const element = screen.getByLabelText("Search");
  fireEvent.change(element, { target: { value: changedValue } });
  expect(element).toHaveValue(value);

  expect(handleKeyPressFunc).toHaveBeenCalled();
});

it(`${name} Does the searchbar fire on pressing enter`, () => {
  const changedValue = "Changed value";
  render(setRender());

  const element = screen.getByLabelText("Search");
  fireEvent.change(element, { target: { value: changedValue } });
  fireEvent.keyPress(element, { key: "Enter", charCode: 13 });
  expect(element).toHaveValue(value);

  expect(handleKeyPressFunc).toHaveBeenCalledTimes(2);
});
