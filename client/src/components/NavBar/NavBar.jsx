import React, { useState } from 'react';/*------ */
import { NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SearchBar from '../SearchBar/SearchBar';
import Logo from './Logo.png';
import style from './NavBar.module.css';

const Navbar = () => {
  const [searchResults, setSearchResults ]= useState([]);/*--------- */
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? { backgroundColor: '#333', color: 'white' } : {};
  };

  // const handleSearch = (query) => {
  //   // Lógica de búsqueda aquí
  //   console.log('Búsqueda realizada:', query);
  // };
  const handleSearchResults = (results) => {
    setSearchResults(results);
  }

  return (
    <AppBar position="fixed" style={{ background: '#fecd23', color: 'grey', top: 0, zIndex: 1000 }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={Logo} className={style.logo} alt="Logo" />
        {location.pathname === "/home" && <SearchBar onSearchResults={handleSearchResults}/>} {/* Condición para mostrar la SearchBar solo en /home */}

        <div>
          <Button color="inherit" component={NavLink} to="/home" style={isActive('/home')}>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/form" style={isActive('/form')}>
            Register
          </Button>
          <Button color="inherit" component={NavLink} to="/create" style={isActive('/create')}>
            Create Videogames
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
