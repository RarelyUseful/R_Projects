import React, { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { Link } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");

  const signInUser = (e) => {
    //e.preventDefault();
    window.localStorage.setItem("LoggedUser", JSON.stringify(username));
    //navigate('/shopping')
  };
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
            {/* <button onClick={() => localStorage.setItem("LoggedUser", JSON.stringify(username))}> */}
            <button onClick={signInUser}>Sign in</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;
