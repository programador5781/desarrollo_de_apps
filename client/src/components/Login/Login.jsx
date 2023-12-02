import React, { useState } from 'react';
import style from "./Login.module.css";
import { Link } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className={style.login_container}>
      <form className={style.login_form} onSubmit={handleSubmit}>
        <h2 className={style.login_title}>Login</h2>
        <div className={style.form_group}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className={style.form_group}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className={style.login_button} type="submit">Login</button>
        <p className={style.registerText}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      </form>
    </div>
  );
}

export default Login;
