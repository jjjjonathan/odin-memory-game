import React from "react";

export default function Scoreboard(props) {
  return (
    <div>
      <p>Current score: {props.currentScore}</p>
      <p>High score: {props.highScore}</p>
    </div>
  );
}
