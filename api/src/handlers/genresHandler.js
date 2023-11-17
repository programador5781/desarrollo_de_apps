const { getAllGenres } = require('../controllers/genresController');


// Get - genres
const getGenresHandler = async (req, res) => {
    try {
        const results = await getAllGenres();

        res.status(200).json(results);
    } catch (error) {
        console.log(`Error al buscar los generos ${error}`);
        res.status(400).send({ error: error.message });
    }
};


module.exports = {
    getGenresHandler
};

