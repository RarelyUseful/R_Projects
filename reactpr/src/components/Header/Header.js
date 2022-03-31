import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";

function Header() {
  let savedUser = { firstName: "", lastName: "" };
  if (localStorage.getItem("user")) {
    savedUser = JSON.parse(localStorage.getItem("user"));
  }
  return (
    <div>
      <p>Entered name: {savedUser.firstName}</p>
      <p>Entered lastname: {savedUser.lastName}</p>
      <p>
        <Link to="/">
          <button
            onClick={() => {
              localStorage.removeItem("user", savedUser);
              // window.localStorage.removeItem("lastName", window.localStorage.getItem("lastName"));
            }}
          >
            Sign out
          </button>
        </Link>
      </p>
    </div>
  );
}

export default Header;
