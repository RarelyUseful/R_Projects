import React, { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { getAirportByIdSelector } from "../../redux/airports/selectors";
import { connect } from "react-redux";
function AirportDetails(props) {
  let navigate = useNavigate();
  const { id } = useParams();
  const handleRemoveAirportFromList = () => {
    props.setInitialAirportsList(id);
    navigate(-1);
  };

  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const airportDetails = props.getAirportById(id);
  return (
    <>
      <Dialog open={dialogIsOpen}>
        <DialogTitle>Czy na pewno chcesz usunąć lotnisko</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDialogIsOpen(false)}>Nie</Button>
          <Button onClick={() => handleRemoveAirportFromList()} autoFocus>
            Tak
          </Button>
        </DialogActions>
      </Dialog>
      <ArrowBackIcon onClick={() => navigate(-1)} fontSize="large" />
      <DeleteForeverIcon
        onClick={() => setDialogIsOpen(true)}
        fontSize="large"
      />
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p>Airport Details</p>
          {airportDetails && (
            <>
              <span>Państwo: {airportDetails.country}</span>
              <span>Miasto: {airportDetails.city}</span>
              <span>Nazwa: {airportDetails.name}</span>
              <span>KOD: {airportDetails.iata_code}</span>
            </>
          )}
        </header>
      </div>
    </>
  );
}
const mapStateToprops = (store) => {
  return {
    getAirportById: (id) => getAirportByIdSelector(store, id),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setInitialAirportsList: (value) =>
      dispatch({ type: "REMOVE_AIRPORT_BY_ID", value: value }),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(AirportDetails);
