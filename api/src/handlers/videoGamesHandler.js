const { searchVideoGameByName, getAllVideoGames, getVideoGameById, createVideoGame, updateVideoGameById } = require("../controllers/videoGamesController");
// Get - videogames
/* GET | /videogames
-  Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.
GET | /videogames/name?="..." **
-  Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
*/
const getVideoGamesHandler = async (req, res) => {
    const { name } = req.query;

    try {
        let results;
        if (name) results = await searchVideoGameByName(name);
        else results = await getAllVideoGames();        

        res.status(200).json(results);
    } catch (error) {
        console.log(`Error al buscar el videojuego con nombre ${name}: ${error}`);
        res.status(400).send({ error: error.message });
    }
};

// Get - videogames/:id
const getVideoGameByIdHandler = async (req, res) => {
    const { id } = req.params;
    const src = isNaN(id) ? "bdd" : "api";

    try {
        const videogame = await getVideoGameById(id, src);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Put - videogames/:id
const putUpdateVideoGames = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body; 

    try {
        const updatedVideoGame = await updateVideoGameById(id, updatedData);
        res.status(200).json(updatedVideoGame); // Devuelve el videojuego actualizado
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Post - videogames (crear un videojuego)
const createVideoGameHandler = async (req, res) => {
    const { name, description, platforms, background_image, released_at, rating } = req.body;    
    try {
        const newVideoGame = await createVideoGame(name, description, platforms, background_image, released_at, rating);
        res.status(201).json(newVideoGame);                
    } catch (error) {
        console.log();
        res.status(400).send({error:error.message})
    }    
};

module.exports = {
    getVideoGamesHandler,
    getVideoGameByIdHandler,
    putUpdateVideoGames,
    createVideoGameHandler
}