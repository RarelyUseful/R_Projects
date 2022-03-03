import React from "react";
import styles from "./Header.module.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: "",
    };
    let searchOnlyCars = false;
  }
  handleSearchPhraseChange = (event) => {
    this.setState({ searchPhrase: event.target.value });
  };
  filterVehicles = () => {
    const { vehicles } = this.props;
    const { searchPhrase, searchOnlyCars } = this.state;

    let filteredVehicles = vehicles.filter((element) => element.brand.includes(searchPhrase));
    if (searchOnlyCars) {
      filteredVehicles = filteredVehicles.filter((element2) => element2.type === "car");
    }
    this.props.sendFilteredVehiclesToParent(filteredVehicles);
  };
  handleOnlyCarsChange = (event) => {
    this.setState({ searchOnlyCars: event.target.checked });
  };

  getUniqueVehicleEngineTypes = () => {
    const { vehicles } = this.props;
    const vehicleEngineList = vehicles.map((vehicle) => vehicle.engineType);
    const uniqueVehicleEngineList = [...new Set(vehicleEngineList)];
    return uniqueVehicleEngineList;
  };
  render() {
    const uniqueVehicleEngineTypes = this.getUniqueVehicleEngineTypes();
    const { searchPhrase, searchOnlyCars, searchEngineType } = this.state;

    return (
      <div className={styles.HeaderWrapper}>
        <p>
          <div>lalala laaa</div>
          <br />
          <input value={searchPhrase} onChange={this.handleSearchPhraseChange}></input>
          <button onClick={this.filterVehicles}>Szukaj</button>
          <p>
            <input type="checkbox" onChange={this.handleOnlyCarsChange} value={searchOnlyCars}></input>
            Tylko samochody
          </p>
          <p>
            <select value={searchEngineType} onChange={this.handleSelectEngineType}>
              {uniqueVehicleEngineTypes.map((engineType) => (
                <option key={engineType} value={engineType}>
                  {engineType}
                </option>
              ))}
            </select>
          </p>
        </p>
      </div>
    );
  }
}

export default Header;
