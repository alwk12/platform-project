import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectForm from "../components/ProjectForm";

test("calls onAddProject with the title and description", async () => {
  const fakeAdd = jest.fn();
  render(<ProjectForm onAddProject={fakeAdd} />);

  await userEvent.type(screen.getByLabelText("Title"), "My Website");
  await userEvent.type(screen.getByLabelText("Description"), "A cool site");
  await userEvent.click(screen.getByRole("button", { name: "Add" }));

  expect(fakeAdd).toHaveBeenCalledWith("My Website", "A cool site");
});

test("shows an error and does not add when the form is empty", async () => {
  const fakeAdd = jest.fn();
  render(<ProjectForm onAddProject={fakeAdd} />);

  await userEvent.click(screen.getByRole("button", { name: "Add" }));

  expect(fakeAdd).not.toHaveBeenCalled();
  expect(screen.getByText(/please fill in both/i)).toBeInTheDocument();
});
