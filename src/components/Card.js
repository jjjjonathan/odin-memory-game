import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <i className={`fab fa-${props.name}`}></i>
    </div>
  );
}
