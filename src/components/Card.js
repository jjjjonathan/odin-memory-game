import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  return (
    <div
      className="card"
      onClick={props.onClick}
      id={props.name}
      data-logo={props.name}
    >
      <i className={`icon fab fa-${props.name}`} data-logo={props.name}></i>
    </div>
  );
}
