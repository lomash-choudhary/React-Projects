import { useState } from "react";
import "./App.css";
import { StartGame } from "./Components/StartGame";
import { Game } from "./Components/GameStarted";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const toggleStart = () => {
    setGameStarted((c) => !c);
  };

  return (
    <div>{gameStarted ? <Game /> : <StartGame toggle={toggleStart} />}</div>
  );
}

export default App;
