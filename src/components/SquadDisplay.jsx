import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import SquadDisplay from "../SquadDisplay";
import { SquadProvider } from "../../context/SquadContext";

const renderWithContext = (component) => {
  return render(<SquadProvider>{component}</SquadProvider>);
};

test("battle button is disabled when squad has less than 2 Pokémon", () => {
  renderWithContext(<SquadDisplay />);
  const battleButton = screen.getByRole("button", { name: /battle/i });
  expect(battleButton).toBeDisabled();
});
