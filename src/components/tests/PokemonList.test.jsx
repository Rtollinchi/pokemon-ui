import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import PokemonList from "../PokemonList";
import { SquadProvider } from "../../context/SquadContext";

test("renders the Pokédex title", () => {
  render(
    <SquadProvider>
      <PokemonList />
    </SquadProvider>
  );

  const heading = screen.getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});
