import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

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
  const handleChange = jest.fn();

  render(
    <Input
      name="nameOfGame"
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      onChange={handleChange}
      required
    />
  );

  const user = userEvent.setup();
  const inputField = screen.getByRole("textbox");

  await user.type(inputField, "W");
  await user.type(inputField, "o");
  await user.type(inputField, "W");

  expect(handleChange).toHaveBeenCalledTimes(3);
});
