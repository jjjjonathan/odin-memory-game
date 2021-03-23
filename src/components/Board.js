import React from "react";
import Card from "../components/Card";
import "../styles/Board.css";
import arrayShuffle from "array-shuffle";

export default function Board(props) {
  const cards = [
    "google",
    "facebook",
    "apple",
    "github",
    "pinterest",
    "tiktok",
    "youtube",
    "airbnb",
  ];

  return (
    <div className="board">
      {arrayShuffle(cards).map((card) => (
        <Card name={card} key={card} />
      ))}
    </div>
  );
}
