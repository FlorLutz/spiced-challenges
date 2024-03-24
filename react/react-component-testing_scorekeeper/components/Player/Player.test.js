import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Peter" score="20"></Player>);

  const nameDisplay = screen.getByText(/peter/i);
  const scoreDisplay = screen.getByText(/20/i);
  const buttonDecrease = screen.getByRole("button", {
    name: /decrease score/i,
  });
  const buttonIncrease = screen.getByRole("button", {
    name: /increase score/i,
  });
  const allButtons = screen.getAllByRole("button");

  expect(nameDisplay).toBeInTheDocument();
  expect(scoreDisplay).toBeInTheDocument();
  expect(buttonDecrease).toBeInTheDocument();
  expect(buttonIncrease).toBeInTheDocument();
  expect(allButtons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();
  const user = userEvent.setup();

  render(
    <Player
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    ></Player>
  );

  const buttonDecrease = screen.getByRole("button", {
    name: /decrease score/i,
  });
  const buttonIncrease = screen.getByRole("button", {
    name: /increase score/i,
  });

  await user.click(buttonDecrease);
  await user.click(buttonDecrease);
  await user.click(buttonIncrease);

  expect(handleDecrease).toHaveBeenCalledTimes(2);
  expect(handleIncrease).toHaveBeenCalledTimes(1);
});
