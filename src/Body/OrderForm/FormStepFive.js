import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./FormUserData.css";
import moment from "moment";
import Alert from "@mui/material/Alert";

export const theme = {
  palette: {
    type: "light",
    primary: {
      main: "#6776cb",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

export class FormStepFour extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    var new_datetime = moment(new Date())
      .add(2, "days")
      .format("YYYY-MM-DD00:00");
    var new_date = moment(new Date()).add(2, "days").format("DD");
    return (
      <React.Fragment>
        <div className="DataContainer">
          <AppBar position="static">
            <Typography variant="h6" color="inherit" component="div">
              Delivery 2 / 2{" "}
            </Typography>{" "}
          </AppBar>{" "}
          <Alert severity="success">
            {" "}
            {values.datetime !== ""
              ? "Ha seleccionado " + values.datetime
              : "Recomendación: Pedir con min 48Hrs de antelación "}{" "}
          </Alert>{" "}
          <br />
          <TextField
            id="datetime-local"
            label="Seleccione fecha de la entrega"
            type="datetime-local"
            minDateTime={new_datetime}
            minDate={new_date}
            defaultValue={
              values.datetime !== ""
                ? values.datetime
                : moment(new Date()).format("YYYY-MM-DDT00:00")
            }
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("datetime")}
          />{" "}
          <br />
          <div className="button-container">
            <Button
              variant="contained"
              onClick={values.datetime !== "" ? this.continue : "dont-work"}
            >
              {" "}
              Continue{" "}
            </Button>{" "}
            <Button variant="contained" color="secondary" onClick={this.back}>
              {" "}
              Back{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default FormStepFour;
