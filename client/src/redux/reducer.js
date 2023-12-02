import { GET_VIDEOGAMES, GET_VIDEOGAMES_NAME, GET_VIDEOGAMES_ID } from "./actions";

const initialState = {
    videogamesList: [],
    searchedVideogames: null,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return { ...state, videogamesList: action.payload };

        case GET_VIDEOGAMES_NAME:
            return { ...state, searchedVideogames: action.payload }; 

        case GET_VIDEOGAMES_ID:
            return { ...state, searchedVideogames: action.payload };
        
        default:
            return state; 
    }
}

export default rootReducer;
