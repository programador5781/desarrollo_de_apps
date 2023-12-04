import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? { backgroundColor: '#333', color: 'white' } : {};
  };

  return (
    <AppBar position="fixed" style={{ background: '#fecd23', color: 'grey', top: 0, zIndex: 1000 }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          VIDEOGAMES WORLD
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="search"
            variant="outlined"
            size="small"
            style={{ backgroundColor: 'white', borderRadius: '5px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: { color: 'black' },
            }}
          />
        </div>
        <div>
          <Button
            color="inherit"
            component={NavLink}
            to="/home"
            style={isActive('/home')}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/login"
            style={isActive('/login')}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/create"
            style={isActive('/create')}
          >
            Create Videogames
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
