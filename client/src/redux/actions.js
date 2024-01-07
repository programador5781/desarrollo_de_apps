import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_NAME = "GET_VIDEOGAMES_NAME";
export const GET_VIDEOGAMES_ID = "GET_VIDEOGAMES_ID";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

// Get all videogames
export const getVideogames = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/videogames")
        // console.log(`Esto es apiData: `, apiData);

        const videogamesList = apiData.data;
        dispatch({type: GET_VIDEOGAMES, payload: videogamesList})
    }
};
// Get - videogames by name
// export const getVideogamesByName = (name) => {
//     return async function (dispatch) {
//         try {
//             const apiData = await axios.get("http://localhost:3001/videogames?name=" + name.toLowerCase());

//             console.log("Esto es apiData:", apiData);

//             // console.log("Esto es searchedVideogames: ", searchedVideogames);
//             if (apiData.data && apiData.data.length > 0) {
//               const searchedVideogames = apiData.data;
//               dispatch({type: GET_VIDEOGAMES_NAME, payload: searchedVideogames})
//             } else {
//               console.warn("La respuesta está vacía o undefined")
//             }



//             // dispatch({type: GET_VIDEOGAMES_NAME, payload: searchedVideogames})
//         } catch (error) {
//             console.error("Error al buscar un videogame por el nombre " + name, error);
//             // Puedes despachar una acción de error aquí si lo deseas
//         }
//     }
// };
// Get - videogames by name
export const getVideogamesByName = (name) => {
  return async function (dispatch) {
      try {
          const apiData = await axios.get("http://localhost:3001/videogames?name=" + name.toLowerCase());

          console.log("Esto es apiData:", apiData);

          // Verifica si hay datos en la respuesta
          if (apiData.data && apiData.data.length > 0) {
              const searchedVideogames = apiData.data;

              // Despacha la acción solo si hay resultados
              dispatch({ type: GET_VIDEOGAMES_NAME, payload: searchedVideogames });
              return { payload: searchedVideogames }; // Devuelve la respuesta
          } else {
              console.log("La respuesta no contiene datos");
              return { payload: [] }; // Devuelve una respuesta vacía
          }
      } catch (error) {
          console.error("Error al buscar un videogame por el nombre " + name, error);
          return { payload: [] }; // Devuelve una respuesta vacía en caso de error
      }
  };
};



// Get - videogames by name
// export const getVideogamesByName = (name) => {
//     return async function (dispatch) {
//         try {
//             const apiData = await axios.get("http://localhost:3001/videogames?name=" + name.toLowerCase())

//             const searchedVideogames = apiData.data;
//             console.log("Esto es searchedVideogames: ", searchedVideogames);

//             dispatch({type: GET_VIDEOGAMES_NAME, payload: searchedVideogames})
//         } catch (error) {
//             console.log("Error al buscar un videogame por el nombre" + name, error);
//         }
//     }
// };
export const getVideogamesById = (id) => {
    return async function (dispatch) {
      try {
        const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
        const searchedVideogames = apiData.data;
  
        dispatch({ type: GET_VIDEOGAMES_ID, payload: searchedVideogames });
        dispatch(clearSearch()); // Limpiar después de obtener los datos por ID
      } catch (error) {
        console.log("Error al buscar un videogame por el ID " + id, error);
      }
    };
  };
  


// Get videogames by id
// export const videogames_id = (id) => {
//     return async function (dispatch) {
//         const apiData = await axios.get("http://localhost:3001/videogames/" + id);

//         const searchedVideogames = apiData.data;
//         dispatch({type: GET_VIDEOGAMES_ID, payload: searchedVideogames})
//     }
// }


export const createVideogame = (videogameData) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.post("http://localhost:3001/videogames", videogameData);

            const createdVideogame = apiData.data;
            console.log("Videojuego creado: ", createdVideogame);

            dispatch({ type: CREATE_VIDEOGAME, payload: createdVideogame });
        } catch (error) {
            console.error("Error al crear el videojuego", error);
            // Manejar el error según sea necesario
        }
    };
}


export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});


export const setSearchResults = (results) => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results,
  });