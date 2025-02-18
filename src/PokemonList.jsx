import { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

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

          return (
            <div key={pokeId} className="p-4 bg-gray-100 rounded shadow text-center capitalize">
              <img src={imageUrl} alt={poke.name} className="w-20 h-20 mx-auto" />
              <p className="text-lg font-medium">{poke.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
