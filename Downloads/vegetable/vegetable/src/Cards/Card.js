// Card.js

import React from 'react';
import './Card.css'; // You can create a CSS file for styling

function Card(props) {
  return (
   

    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">Rs {props.price}/-</p>

      </div>
    </div>
   
  );
}

export default Card;
