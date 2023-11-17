const { Router } = require("express");
const videoGamesRouter = require("./videoGamesRouter");
const genresRouter = require("./genresRouter")

const mainRouter = Router();

mainRouter.use("/videogames", videoGamesRouter);

mainRouter.use("/genres", genresRouter);


module.exports = mainRouter;




