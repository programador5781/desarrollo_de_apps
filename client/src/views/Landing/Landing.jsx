import React from 'react';
import style from "./Landing.module.css";
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className={style.container}>
      <div className={style.overlay}></div>
      <h1 className={style.title}>VIDEOGAMES WORLD</h1>
      <div className={style.buttons}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <button>Register</button>
      </div>
      <p className={style.registerText}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Landing;


