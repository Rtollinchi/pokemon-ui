import { createContext, useState } from 'react';

const SquadContext = createContext();

const SquadProvider = ({ children }) => {
  const [squad, setSquad] = useState([]);

  // Add Pokémon to squad (Max 6, No Duplicates)
  const addToSquad = (pokemon) => {
    if (squad.length < 6 && !squad.some(p => p.name === pokemon.name)) {
      setSquad([...squad, pokemon]);
    }
  };

  // Remove Pokémon from squad
  const removeFromSquad = (pokemon) => {
    setSquad(squad.filter(p => p.name !== pokemon.name));
  };

  return (
    <SquadContext.Provider value={{ squad, addToSquad, removeFromSquad }}>
      {children}
    </SquadContext.Provider>
  );
};

export { SquadProvider, SquadContext };
