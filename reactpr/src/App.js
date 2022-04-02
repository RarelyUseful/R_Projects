import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Navigate, Outlet } from "react-router-dom";
import airports from "./common/consts/airports";
import { useEffect } from "react";
import { uniqueId } from "lodash";

function App() {
  const userExist = localStorage.getItem("user");

  useEffect(() => {
    window.localStorage.setItem("airports", JSON.stringify(airports));
    const mappedAirports = JSON.parse(window.localStorage.getItem("airports")).map((airport) => ({
      ...airport,
      id: uniqueId(),
    }));
    window.localStorage.setItem("airports", JSON.stringify(mappedAirports));
  }, []);

  if (!userExist) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.appWrapper}>
      <Header />
      <Outlet />
      {/* <div className={styles.columnsWrapper}>
        <AirportsList />
      </div> */}
    </div>
  );
}

export default App;
