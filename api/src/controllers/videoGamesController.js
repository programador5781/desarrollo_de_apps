const { VideoGame } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const { dataClean } = require('./cleanData');
const { dataFilter } = require('./filterData')
const { Op } = require('sequelize');
const data = require('./data');
const fs = require('fs').promises;


// Get - /videogames?name=<nombre del video juego>
const searchVideoGameByName = async (name) => {
    const dBVideogames = await VideoGame.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } }
    });
    console.log("Esto es dBVideoGame:", dBVideogames.length);

    // const apiResponse = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    // const apiResponse = await axios.get(`https://apimocha.com/pi-videogames/videogames`);
    const apiResponse = await axios.get(data);
    const apiVideogames = apiResponse.data.results;
    // Implementa dataClean si es necesario

    const apiVG = dataClean(apiVideogames)

    const filterAPILocal = dBVideogames.filter(videogame => videogame.name.toLowerCase().startsWith(name.toLowerCase()));
    console.log("Esto es filterAPILocal: ", filterAPILocal);

    const filterAPIExternal = apiVG.filter(videogame => videogame.name.toLowerCase().startsWith(name.toLowerCase()));
    // console.log("Esto es filterAPIExternal: ", filterAPIExternal);

    if (filterAPIExternal.length === 0 && filterAPILocal.length === 0) {
        return 'No se encontró ningún videojuego con el nombre ' + name;
    }

    const combinedResults = [...filterAPIExternal, ...filterAPILocal].slice(0, 15);

    return combinedResults;
};


// Get - /videogames
// const getAllVideoGames = async () => {

//     try {
//         // const apiResponse = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
//         const apiResponse = await axios.get(`https://apimocha.com/pi-videogames/videogames`);
       
//         const apiVideogames = apiResponse.data.results;
//         console.log(apiVideogames);
//         // Implementa dataClean si es necesario
//         const apiVG = dataClean(apiVideogames);

//         return apiVG;
//     } catch (error) {
//         throw new Error('Error al obtener todos los videojuegos: ' + error.message);
//     }
// };

// Get - /videogames
const getAllVideoGames = async () => {
    try {
      // Ruta al archivo JSON local
      const filePath = 'src\\controllers\\data.json';
  
      // Lee el contenido del archivo JSON
      const jsonData = await fs.readFile(filePath, 'utf-8');
  
      // Parsea el contenido a un objeto JavaScript
      const apiVideogames = JSON.parse(jsonData);
  
      // Implementa dataClean si es necesario
      const apiVG = dataClean(apiVideogames);
  
      return apiVG;
    } catch (error) {
      throw new Error('Error al obtener todos los videojuegos: ' + error.message);
    }
  };

// Get - /videogames/:id
const getVideoGameById = async (id, src) => {
    try {
        let videogame;
        if (src === 'api') {
            // const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}&fields=name,background_image,description,genres,rating,platforms,released,website`);
            // videogame = response.data;
            // videogame = dataFilter([videogame])[0];
            const response = await axios.get(`https://apimocha.com/pi-videogames/videogames/${id}?fields=name,background_image,description,genres,rating,platforms,released,website`);
            // videogame = response.data;
            // videogame = dataFilter([videogame])[0];
            const newApiVideogame = response.data;

            // Ejemplo: Si la respuesta tiene una estructura diferente
            videogame = {
                name: newApiVideogame.name,
                background_image: newApiVideogame.background_image,
                description: newApiVideogame.description,
                genres: newApiVideogame.genres,
                rating: newApiVideogame.rating,
                platforms: newApiVideogame.platforms,
                released: newApiVideogame.released,
                website: newApiVideogame.website,
            };

            videogame = dataFilter([videogame])[0];

        } else if (src === 'bdd') {
            videogame = await VideoGame.findByPk(id);
            if (!videogame) {
                throw new Error(`No se encontró ningún videojuego con el ID ${id}`);
            }
            // videogame = dataFilter([videogame])[0];
        } else {
            throw new Error(`Fuente de datos desconocida: ${src}`);
        }

        return videogame;
    } catch (error) {
        throw new Error(`Error al obtener el videojuego: ${error.message}`);
    }
};

// Put - /videogames/:id
const updateVideoGameById = async (id, updatedData) => {
    try {
        const [updatedRowsCount, updatedVideoGame] = await VideoGame.update(updatedData, {
            where: { id },
            returning: true, // Para devolver el videojuego actualizado
        });

        if (updatedRowsCount === 0) {
            throw new Error(`No se encontró ningún videojuego con el ID ${id}`);
        }

        return updatedVideoGame[0];
    } catch (error) {
        throw new Error(`Error al actualizar el videojuego: ${error.message}`);
    }
};

// Post - videogames ( crear un videojuego )
const createVideoGame = async (name, description, platforms, background_image, released_at, rating) => {
    try {
        const newVideoGame = await VideoGame.create({ name, description, platforms, background_image, released_at, rating });

        return newVideoGame;
    } catch (error) {

        throw new Error('Error al crear el videojuego: ' + error.message);
    }
};


// Delete - id 
// ejemplo:
//http://localhost:3001/videogames/49f94121-330b-4853-bfc0-18e993c50b1f
const deleteVideoGameById = async (id) => {
    try {
        const deletedRowsCount = await VideoGame.destroy({
            where: { id }
        });

        if (deletedRowsCount === 0) {
            throw new Error(`No se encontró ningún videojuego con el ID ${id}`);
        }
    } catch (error) {
        throw new Error(`Error al eliminar el videojuego: ${error.message}`);
    }
};



module.exports = {
    searchVideoGameByName,
    getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGameById,
    deleteVideoGameById
}