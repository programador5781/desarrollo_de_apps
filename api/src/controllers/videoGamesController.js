const { VideoGame } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const { dataClean } = require('./cleanData');
const { dataFilter } = require('./filterData')
const { Op } = require('sequelize');
const data = require('./data1');
const fs = require('fs').promises;


// Get - /videogames?name=<nombre del video juego>
const searchVideoGameByName = async (name) => {
    try {
        let currentPage = 1;
        let combinedResults = [];

        while (true) {
            const jsonPath = `./src/data/data${currentPage}.json`;

            const jsonData = await fs.readFile(jsonPath, 'utf-8');
            const json = JSON.parse(jsonData);

            // Hay que asegurarnos de que dataClean devuelve un array.
            const apiVideogames = dataClean(json);

            const filterAPILocal = apiVideogames.filter(videogame => videogame.name.toLowerCase().startsWith(name.toLowerCase()));

            if (filterAPILocal.length > 0) {
                combinedResults = [...combinedResults, ...filterAPILocal];
            }

            if (json.next) {
                currentPage += 1;
            } else {
                break;
            }
        }

        if (combinedResults.length === 0) {
            return 'No se encontró ningún videojuego con el nombre ' + name;
        }

        combinedResults = combinedResults.slice(0, 15);

        return combinedResults;
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error.message);
        return 'Error al leer el archivo JSON';
    }
};

// Get - /videogames ----> cargando datos desde un json
const getAllVideoGames = async () => {
    try {
      // Ruta al archivo JSON local
      const filePath = 'src\\data\\data1.json';
  
      // Lee el contenido del archivo JSON
      const jsonData = await fs.readFile(filePath, 'utf-8');
  
      // Parsea el contenido a un objeto JavaScript
      const apiVideogames = JSON.parse(jsonData);
  
      // Implementa dataClean si es necesario
      const apiVG = dataClean(apiVideogames);
    //   console.log(apiVG)
  
      return apiVG;
    } catch (error) {
      throw new Error('Error al obtener todos los videojuegos: ' + error.message);
    }
  };

// Get - /videogames/:id
const getVideoGameById = async (id) => {
    try {
        // Parseamos el ID a número
        id = parseInt(id, 10);
        let currentPage = 1;

        while (true) {
            const jsonPath = `./src/data/data${currentPage}.json`;

            const jsonData = await fs.readFile(jsonPath, 'utf-8');
            const json = JSON.parse(jsonData);

            const apiVideogames = dataClean(json);

            // Buscamos el videojuego por ID en el array
            const foundVideoGame = apiVideogames.find(videogame => videogame.id === id);

            if (foundVideoGame) {
                // console.log('Videojuego encontrado:', foundVideoGame);
                return foundVideoGame;
            }

            if (json.next) {
                currentPage += 1;
            } else {
                // No se encontró el videojuego con el ID proporcionado
                return 'No se encontró ningún videojuego con el ID ' + id;
            }
        }
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error.message);
        return 'Error al leer el archivo JSON';
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