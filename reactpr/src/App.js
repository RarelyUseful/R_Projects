import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

// import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from "./App.module.scss";

function App() {
  return (
    <>
      {!window.localStorage.getItem("LoggedUser") && <Navigate to="/" />}

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
