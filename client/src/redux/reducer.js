// import { GET_VIDEOGAMES, GET_VIDEOGAMES_NAME, GET_VIDEOGAMES_ID } from "./actions";

// const initialState = {
//     videogamesList: [],
//     searchedVideogames: null,
// }

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_VIDEOGAMES:
//             return { ...state, videogamesList: action.payload };

//         case GET_VIDEOGAMES_NAME:
//             return { ...state, searchedVideogames: action.payload };

//         case GET_VIDEOGAMES_ID:
//             return { ...state, searchedVideogames: action.payload };

//         default:
//             return state;
//     }
// }

// export default rootReducer;

// import { GET_VIDEOGAMES, GET_VIDEOGAMES_NAME, GET_VIDEOGAMES_ID, CREATE_VIDEOGAME } from "./actions";

// const initialState = {
//     videogamesList: [],
//     searchedVideogames: null,
// }

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_VIDEOGAMES:
//             return { ...state, videogamesList: action.payload };

//         case GET_VIDEOGAMES_NAME:
//             return { ...state, searchedVideogames: action.payload };

//         case GET_VIDEOGAMES_ID:
//             return { ...state, searchedVideogames: action.payload };

//         case CREATE_VIDEOGAME: // Manejo de la acción para crear un nuevo videojuego
//             // Agregar el nuevo videojuego a la lista existente de videojuegos
//             return {
//                 ...state,
//                 videogamesList: [...state.videogamesList, action.payload],
//             };

//         default:
//             return state;
//     }
// }

// export default rootReducer;

// Reducer.js
// import { GET_VIDEOGAMES, GET_VIDEOGAMES_NAME, GET_VIDEOGAMES_ID, CREATE_VIDEOGAME, CLEAR_SEARCH } from "./actions";

// const initialState = {
//     videogamesList: [],
//     searchedVideogames: null,
// }

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_VIDEOGAMES:
//             return { ...state, videogamesList: action.payload, searchedVideogames: null };

//         case GET_VIDEOGAMES_NAME:
//             return { ...state, searchedVideogames: action.payload };

//         case GET_VIDEOGAMES_ID:
//             return { ...state, searchedVideogames: action.payload };

//         case CREATE_VIDEOGAME:
//             return {
//                 ...state,
//                 videogamesList: [...state.videogamesList, action.payload],
//             };

//         case CLEAR_SEARCH:
//             return { ...state, searchedVideogames: null };

//         default:
//             return state;
//     }
// }

// export default rootReducer;

import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_NAME,
  GET_VIDEOGAMES_ID,
  CREATE_VIDEOGAME,
  CLEAR_SEARCH,
  SET_SEARCH_RESULTS,
} from "./actions";

const initialState = {
  videogamesList: [],
  searchResults: [],
  searchedVideogames: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogamesList: action.payload,
        searchedVideogames: null,
      };

    case GET_VIDEOGAMES_NAME:
      return { ...state, searchedVideogames: action.payload };

    case GET_VIDEOGAMES_ID:
      // No establecer searchedVideogames en null después de obtener videojuegos por ID
      return { ...state, searchedVideogames: action.payload };

    case CREATE_VIDEOGAME:
      return {
        ...state,
        videogamesList: [...state.videogamesList, action.payload],
      };

    case CLEAR_SEARCH:
      return { ...state, searchedVideogames: null };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
