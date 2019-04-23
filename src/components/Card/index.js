import React from "react";
import "./card.css";
// This file contains a function that will render the props into each <li> category


function Card(props) {
  return (
    <span className="md-3">
      <div className="img-container">
        <img className="cardImg rounded shadow-lg" alt= { props.name } src = { props.url } onClick = {(e) => props.imageClicked(e, props.image)}/>
      </div>
    </span>
  );
}

export default Card;