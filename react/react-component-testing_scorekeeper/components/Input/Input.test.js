import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// beforeEach can help to render a jsx before every test, but here it makes no sense because of the props

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      name="nameOfInputFiled"
      labelText="This is a label"
      placeholder="e.g. Dodelido"
      required
    />
  );

  const label = screen.getByLabelText(/this is a label/i);
  const input = screen.getByRole("textbox", { placeholder: /e.g. dodelido/i });

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  const mockFunction = jest.fn();
  const user = userEvent.setup();

  render(
    <Input
      name="nameOfGame"
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      onChange={mockFunction}
      required
    />
  );

  const inputField = screen.getByRole("textbox");

  await user.type(inputField, "CandyCrash");
  await user.type(inputField, " ");
  await user.type(inputField, "2");

  expect(mockFunction).toHaveBeenCalledTimes(12); // can be used with .not in front to check for the contrary
});
