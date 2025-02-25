import { useEffect, useState, useContext } from "react";
import { SquadContext } from "../context/SquadContext";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const { squad, addToSquad, removeFromSquad } = useContext(SquadContext);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Pokédex</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pokemon.map((poke, index) => {
          const pokeId = index + 1; // Pokémon IDs are sequential (1-151)
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
          const isInSquad = squad.some((member) => member.name === poke.name);

          return (
            <div
              key={pokeId}
              className="p-4 bg-gray-100 rounded shadow text-center capitalize"
            >
              <img
                src={imageUrl}
                alt={poke.name}
                className="w-20 h-20 mx-auto"
              />
              <p className="text-lg font-medium">{poke.name}</p>
              <button
                className={`mt-2 px-3 py-1 text-sm rounded ${
                  isInSquad ? "bg-red-500 text-white" : "bg-blue-500 text-white"
                }`}
                onClick={() =>
                  isInSquad
                    ? removeFromSquad(poke)
                    : addToSquad({ name: poke.name, imageUrl })
                }
              >
                {isInSquad ? "Remove" : "Add to Squad"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
