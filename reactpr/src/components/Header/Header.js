import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.Wrapper}>
      <p>Hello {JSON.parse(window.localStorage.getItem("LoggedUser"))}</p>
      <p>
        <Link to="/">
          {" "}
          <button
            onClick={window.localStorage.removeItem("LoggedUser", window.localStorage.getItem("LoggedUser"))}
          >
            Sign out
          </button>
        </Link>
      </p>
    </div>
  );
}

export default Header;
