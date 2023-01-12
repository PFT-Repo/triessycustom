import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./FormUserData.css";

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

export class FormUserData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <div className="DataContainer">
          <AppBar position="static">
            <Typography variant="h6" color="inherit" component="div">
              Datos de Usuario
            </Typography>
          </AppBar>
          <br />
          <TextField
            label="Nombre"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            label="Apellido"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            inputProps={{ inputMode: "numeric" }}
            label="Movil"
            onChange={handleChange("phone")}
            defaultValue={values.phone}
          />
          <br />
          <Button
            variant="contained"
            onClick={
              values.firstName && values.lastName && values.phone != ""
                ? this.continue
                : ""
            }
          >
            Continue
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default FormUserData;
