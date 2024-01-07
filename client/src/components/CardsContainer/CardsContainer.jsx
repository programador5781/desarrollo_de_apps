import React, { useEffect } from 'react';
import styles from './CardsContainer.module.css';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getVideogames } from "../../redux/actions";

function CardsContainer() {
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.searchResults);
  const videogamesList = useSelector(state => state.videogamesList);

  useEffect(() => {
    
    if (searchResults.length > 0) {
      
    } else {
      dispatch(getVideogames()); // Disparamos la acción para obtener todos los videojuegos
    }
  }, [dispatch, searchResults]);

  // Renderizamos según los resultados de búsqueda o los videojuegos completos
  const renderData = searchResults.length > 0 ? searchResults : videogamesList;

  return (
    <div className={styles.cardsContainer} >
      {renderData.map(videogame => (
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
