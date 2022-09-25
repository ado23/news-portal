import { render, screen, fireEvent } from "@testing-library/react";
import ResetButton from "components/ResetButton";

const name = "ResetButton -->";
const handleResetFunc = jest.fn();

it(`${name} Does the main component render`, () => {
  render(<ResetButton handleReset={handleResetFunc} />);

  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});

it(`${name} Does the icon render`, () => {
  const handleResetFunc = jest.fn();
  render(<ResetButton handleReset={handleResetFunc} />);

  const element = screen.getByTestId("reset-button-icon");
  expect(element).toBeInTheDocument();
});

it(`${name} Is the reset function called`, () => {
  render(<ResetButton handleReset={handleResetFunc} />);

  const element = screen.getByRole("button");
  fireEvent.click(element);

  expect(handleResetFunc).toHaveBeenCalledTimes(1);
});
