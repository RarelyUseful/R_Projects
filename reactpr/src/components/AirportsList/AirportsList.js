import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ProductsList() {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        {JSON.parse(window.localStorage.getItem("airports"))?.map((airport) => (
          <span key={airport.id}>
            {" "}
            {airport.name} {airport.id}{" "}
          </span>
        ))}
      </header>
    </div>
  );
}

export default ProductsList;
