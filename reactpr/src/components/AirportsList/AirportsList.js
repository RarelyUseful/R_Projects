import React from "react";
import { useNavigate } from "react-router-dom";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ProductsList() {
  let navigate = useNavigate();
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        {JSON.parse(window.localStorage.getItem("airports"))?.map((airport) => (
          <span onClick={() => navigate("/airport/details/" + airport.id)} key={airport.id}>
            {" "}
            {airport.name} {airport.id}{" "}
          </span>
        ))}
      </header>
    </div>
  );
}

export default ProductsList;
