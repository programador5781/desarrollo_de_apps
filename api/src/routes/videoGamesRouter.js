const { Router } = require("express");
const { 
    getVideoGamesHandler,
    getVideoGameByIdHandler,
    putUpdateVideoGames,
    createVideoGameHandler,
    deleteVideoGameHandler
 } = require("../handlers/videoGamesHandler")

const videoGamesRouter = Router();

// Get - videogames
videoGamesRouter.get("/", getVideoGamesHandler );

// Get - obtener videogame por id
videoGamesRouter.get("/:id", getVideoGameByIdHandler );

// Put - actualizar un videogame
videoGamesRouter.put("/:id", putUpdateVideoGames );

// Post - crear un videojuego
videoGamesRouter.post("/", createVideoGameHandler );

// DELETE - /videogames/:id
videoGamesRouter.delete("/:id", deleteVideoGameHandler ); // Ruta para eliminar un videojuego por su ID

module.exports = videoGamesRouter;