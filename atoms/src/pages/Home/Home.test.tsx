import { render, screen } from "@testing-library/react";
import { Home } from ".";

describe("testing for the home component <Home />", () => {
  test("should render Home correctly", () => {
    render(<Home />);
    const home = screen.getByRole("heading", { name: /Esses são os compoenentes existentes:/i });
    expect(home).toBeInTheDocument();
  });
});
