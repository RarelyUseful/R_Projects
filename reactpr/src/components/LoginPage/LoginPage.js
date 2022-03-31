import React, { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");

  const signInUser = (e) => {
    //e.preventDefault();
    window.localStorage.setItem("LoggedUser", JSON.stringify(username));
    navigate("/shopping");
  };
  return (
    <div>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Login Page</p>
        <p>Debugging: logged user = {localStorage.getItem("LoggedUser")}</p>
        <div>
          <input
            placeholder="User Name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <button onClick={signInUser}>Sign in</button>

          {/* <form onSubmit={signInUser}>
            <label>User name</label>
            <input onChange={(event) => setUsername(event.target.value)}></input>

            <button type="submit"> Sign in</button>
          </form> */}
        </div>
      </header>
    </div>
  );
}

export default LoginPage;
