import React, { useEffect } from 'react';
import styles from './CardsContainer.module.css';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getVideogames } from "../../redux/actions"; // Importa la acción

function CardsContainer() {
  const dispatch = useDispatch();
  const videogames = useSelector(state => state.videogamesList);

  useEffect(() => {
    dispatch(getVideogames()); // Dispara la acción al cargar el componente
  }, [dispatch]);

  return (
    <div className={styles.cardsContainer}>
      {videogames.map(videogame => (
        <div key={videogame.id} className={styles.cardItem}>
          <Card
            id={videogame.id}
            name={videogame.name}
            background_image={videogame.background_image}
          />
        </div>
      ))}
    </div>
  );
}

export default CardsContainer;