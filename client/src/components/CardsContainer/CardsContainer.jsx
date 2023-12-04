import React from 'react';
import styles from './CardsContainer.module.css'; // Importa los estilos CSS
import arrayVideogames from './arrayVideogames.json';
import Card from '../Card/Card';

function CardsContainer() {
  const videogames = arrayVideogames;
  return (
    <div className={styles.cardsContainer}>
      {videogames.map(videogame => {
        return (
          <div key={videogame.id} className={styles.cardItem}>
            <Card
              id={videogame.id}
              name={videogame.name}
              background_image={videogame.background_image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardsContainer;
