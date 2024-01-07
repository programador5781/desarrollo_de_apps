import React from "react";
import styles from "./Card.module.css"; // Importamos los estilos CSS

function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.cardImage}
        src={props.background_image}
        alt={props.name}
      />
      <p className={styles.cardInfo}>Name: {props.name}</p>
      <p className={styles.cardInfo}>Id: {props.id}</p>
    </div>
  );
}

export default Card;
