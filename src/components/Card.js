import React from "react";

export default function Card(props) {
  return (
    <div>
      <i className={`fab fa-${props.name}`}></i>
    </div>
  );
}
