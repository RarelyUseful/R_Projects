import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";

function Header() {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const resetAirports = () => {return true};
  // dispatch({ type: "SET_INITIAL_AIRPORTS_LIST", value: value });
  return (
    <div className={styles.Wrapper}>
      <Typography sx={{ m: 2 }} variant="h5">
        Logged user:{" "}
        {`${currentUser.userfirstName} ${currentUser.userLastName}`}
      </Typography>
      <Link to="/">
        <Button variant="outlined">Sign out</Button>
      </Link>
      <Button onClick={() => resetAirports()} variant="outlined">
        Reset Airports
      </Button>
    </div>
  );
}

export default Header;
