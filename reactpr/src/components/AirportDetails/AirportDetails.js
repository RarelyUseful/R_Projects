import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function AirportDetails() {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Szczegóły lotniska</p>
        {JSON.parse(localStorage.getItem("airports")).map((airport) => (
          <span key={airport.id}>
            {" "}
            {airport.name} {airport.city}{" "}
          </span>
        ))}
      </header>
    </div>
  );
}

export default AirportDetails;
