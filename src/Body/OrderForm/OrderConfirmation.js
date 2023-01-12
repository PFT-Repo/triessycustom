import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./FormUserData.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

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

export class OrderConfirmation extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <React.Fragment>
        <div className="DataContainer">
          <AppBar position="static">
            <Typography variant="h6" color="inherit" component="div">
              Confirmar Datos{" "}
            </Typography>{" "}
          </AppBar>{" "}
          <br />
          <List style={{ maxHeight: "300px", overflow: "auto" }}>
            <Alert severity="info">
              {" "}
              {"Confirma que todo sea correcto !"}{" "}
            </Alert>
            <ListItem>
              <ListItemText primary="Nombre" secondary={values.firstName} />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText primary="Apellido" secondary={values.lastName} />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText
                primary="Telefono de Contacto"
                secondary={values.phone}
              />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText primary="Porciones" secondary={values.portions} />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText primary="Sabor" secondary={values.flavour} />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText primary="Relleno" secondary={values.fill} />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText primary="Topping" secondary={values.topping} />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText
                primary="Decoración"
                secondary={values.decoration}
              />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText
                primary="Extras & Comentarios"
                secondary={values.extra}
              />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText
                primary="Delivery"
                secondary={values.delivery == 2 ? "local" : "A Domicilio"}
              />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText
                primary="Calle"
                secondary={values.delivery == 2 ? "local" : values.street}
              />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText
                primary="Numero"
                secondary={values.delivery == 2 ? "local" : values.number}
              />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText
                primary="Provincia"
                secondary={values.delivery == 2 ? "local" : values.province}
              />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText
                primary="Codigo Postal"
                secondary={values.delivery == 2 ? "local" : values.zipnum}
              />{" "}
            </ListItem>{" "}
            <ListItem>
              <ListItemText primary="Dia & Hora" secondary={values.datetime} />{" "}
            </ListItem>{" "}
          </List>{" "}
          <br />
          <div className="button-container">
            <Button variant="contained" onClick={this.continue}>
              {" "}
              Confirm & Continue{" "}
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

export default OrderConfirmation;
