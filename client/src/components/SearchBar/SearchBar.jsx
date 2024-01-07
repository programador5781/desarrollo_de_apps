import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getVideogamesByName, setSearchResults } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputPlaceholder, setInputPlaceholder] = useState("Busca tu videojuego");
  // const [searchQuery, setSearchQuery] = useState('');
  const [name, setName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setInputPlaceholder((prevText) =>
        prevText === "Busca info de tu video juego"
          ? "Find your video game"
          : "Busca info de tu video juego"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    // setSearchQuery(e.target.value);
    setName(e.target.value);
  };


  // const handleOptionSubmit = (e) => {
  //   e.preventDefault();
  //   const searchTerm = name;
  //   const results = performSearch(searchTerm);
  //   dispatch(setSearchResults(results));
  //   setName("");
  // }
  // const handleOptionSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     // Lógica de búsqueda
  //     const response = await dispatch(getVideogamesByName(name));
  //     console.log("esto es response:",response);

  //     if(response && response.payload) {
  //       dispatch(setSearchResults(response.payload))
  //     } else {
  //       console.error("La respuesta es undefined o null o no contiene datos", response);
  //     }
      
  //     // Actualizar los resultados en el estado global
  //     // dispatch(setSearchResults(response.payload));
  //   } catch (error) {
  //     console.error("Error al buscar videojuegos:", error);
  //   }

  //   setName("");
  // }

  const handleOptionSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await dispatch(getVideogamesByName(name));

        // Verifica si response es undefined o null o no contiene datos
        if (response && response.payload && response.payload.length > 0) {
            dispatch(setSearchResults(response.payload));
        } else {
            console.log("La respuesta es undefined o null o no contiene datos");
        }
    } catch (error) {
        console.error("Error al buscar videojuegos:", error);
    }

    setName("");
};



  return (
    <div className={style.container_searchBar}>
      <input
        className={style.input}
        type="text"
        placeholder={inputPlaceholder}
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className={style.btn_searchBar}
        type="submit"
        onClick={(e) => handleOptionSubmit(e)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

