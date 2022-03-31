import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import Header from "./components/Header/Header";
import { Navigate } from "react-router-dom";
// import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from "./App.module.scss";

function App() {
  let savedUser = localStorage.getItem("user");
  // let isUserValid = () => {
  //   if (JSON.parse(savedUser.firstName).length() > 0 && JSON.parse(savedUser.lastName).length() > 0) {
  //     return true;
  // } else
  if (!savedUser || !JSON.parse(savedUser).firstName || !JSON.parse(savedUser).lastName) {
    return <Navigate to="/" />;
  } //else if (JSON.parse(savedUser).firstName.length() < 1) {
  //return <Navigate to="/" />;
  // }

  // const userExist = localStorage.getItem("user");

  // if (!userExist) {
  //   return <Navigate to="/" />;
  // }
  return (
    <>
      {/* {!isUserValid && <Navigate to="/" />} */}

      <div className={styles.appWrapper}>
        <Header />
        {/* <ProductsFilters /> */}
        <div className={styles.columnsWrapper}>
          <ProductsList />
          <ShopingList />
        </div>
      </div>
    </>
  );
}

export default App;
