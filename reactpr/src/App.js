import Results from "./components/Results/Results";
import { useState } from "react";
// import RightColumn from './components/RightColumn/RightColumn';
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import vehicles from "./common/consts/vehicles";

function App() {
  const [resultsToDisplay, setResultsToDisplay] = useState(vehicles);

  console.log("stan resultsToDisplay", resultsToDisplay);
  return (
    <div className={styles.appWrapper}>
      <Header vehicles={vehicles} sendFilteredVehiclesToParent={setResultsToDisplay} />
      <div className={styles.columnsWrapper}>
        <Results cars={resultsToDisplay} />
        {/* <RightColumn /> */}
      </div>
    </div>
  );
}

export default App;
