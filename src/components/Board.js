import React from "react";
import Card from "../components/Card";
import "../styles/Board.css";

export default function Board(props) {
  return (
    <div className="board">
      <Card name="google" />
      <Card name="facebook" />
      <Card name="apple" />
      <Card name="github" />
      <Card name="pinterest" />
      <Card name="tiktok" />
      <Card name="youtube" />
      <Card name="airbnb" />
    </div>
  );
}
