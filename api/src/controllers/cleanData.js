// const dataClean = (data) => {
//     // Utilizamos el método map de JavaScript para iterar sobre la data (es un array) original y construir una copia limpia
//     console.log('Esto es data:', data);
//     return data.map((element) => {
//       // Para cada elemento en el array original, creamos un nuevo objeto con propiedades específicas
//       const cleanPlatforms = element.platforms.map((platform) => {
//         const cleanPlatform = {
//           id: platform.platform.id,
//           name: platform.platform.name,
//           slug: platform.platform.slug,
//         };
//         return cleanPlatform;
//       });
  
//       const genres = element.genres.map((genre) => genre.name); // Accedemos al array de géneros y obtenemos solo el nombre de cada género
  
//       return {
//         id: element.id,
//         name: element.name,
//         background_image: element.background_image,
//         description: element.description,
//         platforms: cleanPlatforms,
//         genres: genres,
//         released_at: element.released_at,
//         rating: element.rating,
//         created: false,
//       };
//     });
//   };

//   module.exports = { dataClean };

//   /*-------------------------------------------------------------------------------------------------------- */


const dataClean = (data) => {
  // Asegúrate de que la propiedad 'results' exista en tus datos
  if (!data.results) {
    throw new Error('La propiedad "results" no está presente en los datos proporcionados.');
  }

  // Utilizamos el método map de JavaScript para iterar sobre la data (es un array) original y construir una copia limpia
  return data.results.map((element) => {
    // Para cada elemento en el array original, creamos un nuevo objeto con propiedades específicas
    const cleanPlatforms = element.parent_platforms.map((platform) => {
      const cleanPlatform = {
        id: platform.platform.id,
        name: platform.platform.name,
        slug: platform.platform.slug,
      };
      return cleanPlatform;
    });

    const genres = element.genres.map((genre) => genre.name); // Accedemos al array de géneros y obtenemos solo el nombre de cada género

    return {
      id: element.id,
      name: element.name,
      background_image: element.background_image,
      description: element.description,
      platforms: cleanPlatforms,
      genres: genres,
      released_at: element.released,
      rating: element.rating,
      created: false,
    };
  });
};

module.exports = { dataClean };
