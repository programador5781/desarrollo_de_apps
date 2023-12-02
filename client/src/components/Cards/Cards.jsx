import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Cards.module.css';

function CardsContainer() {
  const videogamesData = useSelector(state => state.videogamesList);
  const searchedVideogames = useSelector(state => state.searchedVideogames);

  return (
    <div className={styles.cardsContainer}>
      {searchedVideogames ? (
        <Card
          key={searchedVideogames.id}
          name={searchedVideogames.name}
          id={searchedVideogames.id}
          img={searchedVideogames.background_image} // Corregido: background_image en lugar de img
          styles={styles}
        />
      ) : (
        videogamesData && videogamesData.map(videogame => (
          <Card
            key={videogame.id}
            name={videogame.name}
            id={videogame.id}
            img={videogame.background_image} 
            styles={styles}
          />
        ))
      )}
    </div>
  );
}

export default CardsContainer;
