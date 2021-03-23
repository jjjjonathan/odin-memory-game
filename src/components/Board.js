import React, { useState } from "react";
import Card from "../components/Card";
import "../styles/Board.css";
import arrayShuffle from "array-shuffle";

export default function Board(props) {
  const [cards, setCards] = useState([
    "google",
    "facebook",
    "apple",
    "github",
    "pinterest",
    "tiktok",
    "youtube",
    "airbnb",
  ]);

  function handleCardClick(event) {
    props.onCardClick(event);
    setCards(arrayShuffle(cards));
  }

  return (
    <div className="board">
      {cards.map((card) => (
        <Card name={card} key={card} onClick={handleCardClick} />
      ))}
    </div>
  );
}
