import React, { Component } from "react";
import Button from "@mui/material/Button";

import AppBar from "@mui/material/AppBar";

import whatsappIcon from "../../Drawables/ic_whatsapp.png";

import Typography from "@mui/material/Typography";

export default class Succes extends Component {
  again = (e) => {
    e.preventDefault();
    this.props.otherOrder();
  };

  render() {
    const { values } = this.props;
    let urldelmensaje =
      "Nombre: " +
      values.firstName +
      "\n" +
      "Apellido: " +
      values.lastName +
      "\n" +
      "Movil: " +
      values.phone +
      "\n" +
      "Porciones: " +
      values.portions +
      "\n" +
      "Sabor: " +
      values.flavour +
      "\n" +
      "Relleno: " +
      values.fill +
      "\n" +
      "Topping: " +
      values.topping +
      "\n" +
      "Decoración: " +
      values.decoration +
      "\n" +
      "Extra: " +
      values.extra +
      "\n" +
      "Delivery: " +
      values.delivery +
      "\n" +
      "Calle: " +
      values.street +
      "\n" +
      "Numero: " +
      values.number +
      "\n" +
      "Codigo Postal: " +
      values.zipnum +
      "\n" +
      "Provincia: " +
      values.province +
      "\n" +
      "Fecha y Hora: " +
      values.datetime;
    return (
      <React.Fragment>
        <div style={{ background: "white" }}>
          <AppBar position="static">
            <Typography variant="h6" color="inherit" component="div">
              GRACIAS!!!
            </Typography>{" "}
          </AppBar>{" "}
          <br />
          <p className="p">
            {" "}
            Todavia estamos trabajando en esta plataforma para ti <br /> <br />
            Mientras, lo invitamos a continuar con su pedido por WhatsApp{" "}
          </p>{" "}
          <button
            className="WhatsApp"
            onClick={() =>
              window.open(
                encodeURI("https://wa.me/34653803243?text=" + urldelmensaje)
              )
            }
          >
            {" "}
            <img src={whatsappIcon} className="img" alt="WhatsApp" />{" "}
          </button>{" "}
          <br />
          <br />
          <p>
            {" "}
            Gracias de nuevo y en la siguiente pantalla inicie el chat que en
            breve le estaremos contactando{" "}
          </p>{" "}
          <br />
          <Button variant="contained" onClick={this.again}>
            {" "}
            Desea realizar otro pedido ?{" "}
          </Button>{" "}
          <br />
          <br />
        </div>{" "}
      </React.Fragment>
    );
  }
}
