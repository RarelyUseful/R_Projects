import logo from "../.././logo.svg";
// import styles from './RightColumn.module.scss';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useState } from "react";

function RightColumn(props) {
  const [wartoscInput, modyfikujInput] = useState(0);
  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  };
  const setTimerCustomValue = (event) => {
    console.log(event);
    modyfikujInput(parseInt(event.target.value));
  };
  const setTimerInHeader = () => {
    props.handleChangeTimer(wartoscInput);
  };
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <button onDoubleClick={handleDoubleClick}> Double click to reset timer </button>

        <button onClick={setTimerInHeader}> Set value from input to timer</button>
        <input type="number" value={wartoscInput} onChange={setTimerCustomValue} />

        <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
        <p>Right column</p>
      </header>
    </div>
  );
}

export default RightColumn;
