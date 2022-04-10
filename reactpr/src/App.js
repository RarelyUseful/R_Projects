import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
//import airports from "./common/consts/airports";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SET_INITIAL_AIRPORTS_LIST" });
  }, []);
  const userExist = localStorage.getItem("user");
  //props.setInitialAirportsList(airports);

  if (!userExist) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Outlet />
    </div>
  );
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setInitialAirportsList: (value) =>
//       dispatch({ type: "SET_INITIAL_AIRPORTS_LIST", value: value }),
//   };
// };

// export default connect(null, mapDispatchToProps)(App);

export default App;
