import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("shows the 3 starting projects", () => {
  render(<App />);
  expect(screen.getByText("Project 1")).toBeInTheDocument();
  expect(screen.getByText("Project 2")).toBeInTheDocument();
  expect(screen.getByText("Project 3")).toBeInTheDocument();
});

test("adds a new project to the list", async () => {
  render(<App />);

  await userEvent.type(screen.getByLabelText("Title"), "Portfolio Site");
  await userEvent.type(screen.getByLabelText("Description"), "Made with React");
  await userEvent.click(screen.getByRole("button", { name: "Add" }));

  expect(screen.getByText("Portfolio Site")).toBeInTheDocument();
  expect(screen.getByText("Made with React")).toBeInTheDocument();
});

test("search filters the projects", async () => {
  render(<App />);

  await userEvent.type(screen.getByPlaceholderText("Search Projects"), "Project 2");

  expect(screen.getByText("Project 2")).toBeInTheDocument();
  expect(screen.queryByText("Project 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Project 3")).not.toBeInTheDocument();
});

test("shows a message when no project matches", async () => {
  render(<App />);

  await userEvent.type(screen.getByPlaceholderText("Search Projects"), "zzz");

  expect(screen.getByText("No projects found.")).toBeInTheDocument();
});
