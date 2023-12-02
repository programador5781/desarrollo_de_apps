import React from 'react';


function Card(props) {
  return (
    <div className={props.styles.card}>
      <img src={props.background_image} alt={props.name} className={props.styles.cardImage} />
      <p>Name: {props.name}</p>
      <p>ID: {props.id}</p>
    </div>
  );
}

export default Card;
