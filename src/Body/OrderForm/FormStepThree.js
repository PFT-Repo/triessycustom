import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./FormUserData.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";

export const theme= {
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

export class FormStepThree extends Component {
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
    return (
      <React.Fragment>
        <div className="DataContainer">
          <AppBar position="static">
            <Typography variant="h6" color="inherit" component="div">
              Destalles de tu pedido 2 / 2
            </Typography>
          </AppBar>
          <br />
          <Alert severity="info"> {"Selecciona tus preferencias"} </Alert>
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"> Topping </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.topping !== "" ? values.topping : "Seleccione"}
              label="topping"
              onChange={handleChange("topping")}
            >
              <MenuItem value={"Fresa"}> Fresa </MenuItem>
              <MenuItem value={"Frambuesa"}> Frambuesa </MenuItem>
              <MenuItem value={"Melocoton"}> Melocotón </MenuItem>
              <MenuItem value={"Otra-Fruta"}> Otra Fruta </MenuItem>
              <MenuItem value={"Cacahuetes"}> Cacahuetes </MenuItem>
              <MenuItem value={"Avellanas"}> Avellanas </MenuItem>
              <MenuItem value={"Nueces"}> Nueces </MenuItem>
              <MenuItem value={"Pistachos"}> Pistachos </MenuItem>
              <MenuItem value={"Gotas de Chocolate"}> Gotas de Chocolate </MenuItem>
              <MenuItem value={"Kinder Bueno"}> Kinder Bueno </MenuItem>
              <MenuItem value={"Oreo"}> Oreo </MenuItem>
              <MenuItem value={"Nada"}> Nada </MenuItem>
              <MenuItem value={"Otro"}>Otro, escribir en detalles</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"> Decoracion </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.decoration !== "" ? values.decoration : "Seleccione"}
              label="Decoracion"
              onChange={handleChange("decoration")}
            >
              <MenuItem value={"Fondant"}> Fondant </MenuItem>
              <MenuItem value={"ButterCream"}> ButterCream </MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            label="Extras y Comentarios"
            onChange={handleChange("extra")}
            defaultValue={values.extra}
          />
          <br />
          <div className="button-container">
            <Button
              variant="contained"
              onClick={
                values.topping && values.decoration !== "" ? this.continue : ""
              }
            >
              
              Continue
            </Button>
            <Button variant="contained" color="secondary" onClick={this.back}>
              
              Back
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormStepThree;
