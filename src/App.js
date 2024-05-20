import { useState } from "react";
import "./App.css";
import EndScreen from "./Components/EndScreen";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helper/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [scoreState, setScoreState] = useState(0);
  return (
    <>
    <div className="home">
      <h1 class="text-center display-5 fw-bold text-primary py-3">Quiz App</h1>

      
        <QuizContext.Provider value={{ gameState, setGameState , scoreState, setScoreState}}>
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "end" && <EndScreen />}
        </QuizContext.Provider>
        </div>
        
      
      
    </>
  );
}

export default App;
