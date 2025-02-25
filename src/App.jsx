import PokemonList from "./components/PokemonList";
import SquadDisplay from "./components/SquadDisplay";

function App() {
  return (
    <>
      <div className="w-full flex justify-center">
        <SquadDisplay />
      </div>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <PokemonList />
      </div>
    </>
  );
}

export default App;
