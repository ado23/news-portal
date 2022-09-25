import { render, screen, fireEvent } from "@testing-library/react";
import LoadMoreButton from "components/LoadMore";

const name = "LoadMoreButton -->";

const handleOnClickFunc = jest.fn();

const setRender = (isDisabled = false) => (
  <LoadMoreButton onClickHandler={handleOnClickFunc} isDisabled={isDisabled} />
);

it(`${name} Does the main component render`, () => {
  render(setRender());

  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});

it(`${name} Does the button trigger on click function`, () => {
  render(setRender());

  const element = screen.getByRole("button");
  fireEvent.click(element);
  expect(handleOnClickFunc).toBeCalledTimes(1);
});

it(`${name} Is the button disabled`, () => {
  render(setRender(true));

  const element = screen.getByRole("button");
  expect(element).toBeDisabled();
});

it(`${name} Is the button enabled`, () => {
  render(setRender(false));

  const element = screen.getByRole("button");
  expect(element).toBeEnabled();
});
