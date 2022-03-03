import React from "react";
import vehicles from "../../common/consts/vehicles";
// import styles from './Results.module.scss';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class Results extends React.Component {
  render() {
    const { cars } = this.props;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p>Results</p>
          <ul>
            {cars.map((vehicles) => (
              <li>{`${vehicles.brand} ${vehicles.model}`}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default Results;
