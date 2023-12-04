import React from "react";
import { Routes, Route , useLocation } from "react-router-dom";
import { Landing, Home, Form, Detail } from "./views";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";


function App() {
  const location = useLocation();


  return (
    <div className="App">  
    {location.pathname !== "/" && <NavBar />}
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
