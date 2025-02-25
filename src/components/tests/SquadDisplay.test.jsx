import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import PokemonList from "../PokemonList";
import { SquadProvider } from "../../context/SquadContext";

const renderWithContext = (component) => {
  return render(<SquadProvider>{component}</SquadProvider>);
};

test("renders the Pokédex title", () => {
  renderWithContext(<PokemonList />);
  const heading = screen.getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

test("adds and removes Pokémon from squad", async () => {
  renderWithContext(<PokemonList />);

  // Click the "Add to Squad" button
  const addButton = await screen.findAllByRole("button", { name: /add to squad/i });
  fireEvent.click(addButton[0]); // Adds first Pokémon

  // Ensure "Remove" button appears
  const removeButton = await screen.findByRole("button", { name: /remove/i });
  expect(removeButton).toBeInTheDocument();

  // Click "Remove" button
  fireEvent.click(removeButton);

  // Ensure "Add to Squad" button appears again
  expect(await screen.findByRole("button", { name: /add to squad/i })).toBeInTheDocument();
});
