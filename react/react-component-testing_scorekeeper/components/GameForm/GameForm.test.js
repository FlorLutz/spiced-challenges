import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm></GameForm>);
  const inputFields = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputFields).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm></GameForm>);
  const form = screen.getByRole("form", { name: /create a new game/i });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const mockSubmit = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={mockSubmit}></GameForm>);

  const gameInput = screen.getByRole("textbox", { name: /name of game/i });
  const playerInput = screen.getByRole("textbox", {
    name: /player names, separated by comma/i,
  });
  const submitButton = screen.getByRole("button", { name: /create game/i });

  await user.type(gameInput, "Wonderworld");
  await user.type(playerInput, "Peter, Ezra");
  await user.click(submitButton);

  const submittedDataObject = {
    nameOfGame: "Wonderworld",
    playerNames: ["Peter", "Ezra"],
  };

  expect(mockSubmit).toHaveBeenCalledWith(submittedDataObject);
});

test("does not submit form if one input field is left empty", async () => {
  const mockSubmit = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={mockSubmit}></GameForm>);

  const gameInput = screen.getByRole("textbox", { name: /name of game/i });
  const playerInput = screen.getByRole("textbox", {
    name: /player names, separated by comma/i,
  });
  const submitButton = screen.getByRole("button", { name: /create game/i });

  await user.type(gameInput, "Wonderworld");
  // no input in playerNames
  await user.click(submitButton);

  expect(mockSubmit).not.toHaveBeenCalled();
});
