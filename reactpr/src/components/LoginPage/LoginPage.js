import React, { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signInUser = () => {
    window.localStorage.setItem("user", JSON.stringify({ firstName, lastName }));
    // window.localStorage.setItem("lastName", JSON.stringify(userlastname));
    navigate("/shopping");
  };
  return (
    <div>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Login Page</p>
        <p>
          Debugging: user = {localStorage.getItem("user")}
          {/* name = {JSON.parse(localStorage.getItem("user")).firstName} */}
          {/* lastname = {JSON.parse(localStorage.getItem("user")).lastName} */}
        </p>
        <div>
          <input
            placeholder="Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
          <input
            placeholder="Lastname"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
          <button onClick={signInUser}>Sign in</button>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;
