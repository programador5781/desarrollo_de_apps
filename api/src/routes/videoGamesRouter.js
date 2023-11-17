const { Router } = require("express");
const { 
    getVideoGamesHandler,
    getVideoGameByIdHandler,
    putUpdateVideoGames,
    createVideoGameHandler
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

module.exports = videoGamesRouter;