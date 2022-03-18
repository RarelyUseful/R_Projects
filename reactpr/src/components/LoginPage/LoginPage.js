import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Login Page</p>
        <p>Logged user?: {localStorage.getItem("LoggedUser")}</p>
        <div>
          <input
            placeholder="User Name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <Link to="/shopping">
            <button onClick={() => localStorage.setItem("LoggedUser", username)}>Sign in</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;
