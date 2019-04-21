import React from "react";
import "./card.css";
// This file contains a function that will render the props into each <li> category


function Card(props) {
  return (
    <span className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Artist:</strong> {props.artist}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Year:</strong> {props.year}
          </li>
        </ul>
      </div>
    </span>
  );
}

export default Card;
