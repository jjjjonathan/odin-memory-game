import React from "react";

export default function Card(props) {
  return (
    <div>
      <i class="fab fa-{props.name}"></i>
    </div>
  );
}
