import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_NAME = "GET_VIDEOGAMES_NAME";
export const GET_VIDEOGAMES_ID = "GET_VIDEOGAMES_ID";

// Get all videogames
export const getVideogames = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/videogames")
        console.log(`Esto es apiData: `, apiData);

        const videogamesList = apiData.data;
        dispatch({type: GET_VIDEOGAMES, payload: videogamesList})
    }
};

// Get - videogames by name
export const getVideogamesByName = (name) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get("http://localhost:3001/videogames?name=" + name.toLowerCase())

            const searchedVideogames = apiData.data;
            console.log("Esto es searchedVideogames: ", searchedVideogames);

            dispatch({type: GET_VIDEOGAMES_NAME, payload: searchedVideogames})
        } catch (error) {
            console.log("Error al buscar un videogame por el nombre" + name, error);
        }
    }
};


// Get videogames by id
export const videogames_id = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/videogames/" + id);

        const searchedVideogames = apiData.data;
        dispatch({type: GET_VIDEOGAMES_ID, payload: searchedVideogames})
    }
}
