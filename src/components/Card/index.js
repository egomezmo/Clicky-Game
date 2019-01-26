import React from "react";      // REACT ALWAYS
import "./Card.css";            // COMPONENT CSS

const Card = props => (

  <div className="card">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleScoreCard(props.id)}/>
  </div>
  
);

export default Card;