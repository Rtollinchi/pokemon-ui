import React, { useContext } from "react";
import { SquadContext } from "../context/SquadContext";

const SquadDisplay = () => {
  const { squad, removeFromSquad } = useContext(SquadContext);
  const canBattle = squad.length >= 2; // Enable button when at least 2 Pokémon are selected

  return (
    <div className="p-4 bg-gray-200 rounded shadow mt-6">
      <h2 className="text-2xl font-bold text-center">Your Squad</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {squad.map((poke, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={poke.imageUrl} alt={poke.name} className="w-16 h-16" />
            <p className="capitalize">{poke.name}</p>
            <button className="bg-red-500 text-white px-2 py-1 text-xs rounded mt-2"
              onClick={() => removeFromSquad(poke)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        className={`mt-4 px-4 py-2 text-white rounded ${canBattle ? 'bg-green-500' : 'bg-gray-400 cursor-not-allowed'}`}
        disabled={!canBattle}
      >
        Battle
      </button>
    </div>
  );
};

export default SquadDisplay;
