// import { useLocation } from "react-router-dom";
// import React from "react"; /*----- */
// import { connect } from "react-redux";
// import CardsContainer from "../../components/CardsContainer/CardsContainer";
// import style from "./Home.module.css";

// function Home({ searchResults }) {
//   const location = useLocation();

//   return (
//     <div className={style.home}>
//       {searchResults && searchResults.length > 0 && (
//         <div className={style.searchResultsContainer}>
//           <h2>Resiltados de la busqueda:</h2>
//           <ul>
//             {searchResults.map((result) => (
//               <li key={result.id}>{result.name}</li>
//             ))}
//           </ul>

//         </div>
//       )}
//       <div className={style.CardsContainer}>
//         <CardsContainer />
//       </div>
//     </div>
//   )
// }

// export default Home;

// Home.jsx

import React from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";

function Home({ searchResults, videogamesList }) {
  const location = useLocation();

  return (
    <div className={style.home}>
      {location.search && searchResults.length > 0 && (
        <div className={style.searchResultsContainer}>
          <h2>Resultados de la búsqueda:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
      {!location.search && (
        <div className={style.CardsContainer}>
          <CardsContainer />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
  videogamesList: state.videogamesList,
});

export default connect(mapStateToProps)(Home);

