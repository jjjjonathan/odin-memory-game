import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedList, setClickedList] = useState([]);

  const handleCardClick = (event) => {
    const clicked = event.target.dataset.logo;
    if (!clickedList.includes(clicked)) {
      setClickedList([...clickedList, clicked]);
      setCurrentScore(currentScore + 1);
    } else {
      if (currentScore > highScore) setHighScore(currentScore);
      setCurrentScore(0);
      setClickedList([]);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <h1>Logo Memory Game</h1>
          <h2>Don't click the same icon twice!</h2>
        </div>
        <Scoreboard currentScore={currentScore} highScore={highScore} />
      </div>
      <Board onCardClick={handleCardClick} />
    </div>
  );
}
