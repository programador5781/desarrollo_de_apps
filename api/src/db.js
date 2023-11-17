const { Sequelize } = require("sequelize");
require("dotenv").config();

const videoGamesModel = require("../src/models/VideoGame");
const genderGames = require("../src/models/Genre");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,{logging: false});

videoGamesModel(sequelize);
genderGames(sequelize);

const { VideoGame, Genre } = sequelize.models;

VideoGame.belongsToMany(Genre, {through: "videogame_genre"})
Genre.belongsToMany(VideoGame, {through: "videogame_genre"})





module.exports = {sequelize, ...sequelize.models}