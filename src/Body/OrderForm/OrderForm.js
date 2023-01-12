import React, { Component } from "react";
import "./OrderForm.css";
import FormUserData from "./FormUserData";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";
import OrderConfirmation from "./OrderConfirmation";
import Succes from "./Succes";
export class Orderform extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    phone: "",
    portions: "5",
    flavour: "",
    fill: "",
    topping: "",
    decoration: "",
    extra: "",
    delivery: "no",
    street: "local",
    number: "local",
    zipnum: "local",
    province: "Barcelona",
    datetime: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  otherOrder = () => {
    const { step } = this.state;
    this.setState({
      step: 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      phone,
      portions,
      flavour,
      fill,
      topping,
      decoration,
      extra,
      delivery,
      street,
      number,
      zipnum,
      province,
      datetime,
    } = this.state;

    const values = {
      firstName,
      lastName,
      phone,
      portions,
      flavour,
      fill,
      topping,
      decoration,
      extra,
      delivery,
      street,
      number,
      zipnum,
      province,
      datetime,
    };
    switch (step) {
      case 1:
        return (
          <FormUserData
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormStepTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormStepThree
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <FormStepFour
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <FormStepFive
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <OrderConfirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 7:
        return <Succes otherOrder={this.otherOrder} values={values} />;
      case 8:
        return <h1> DeliverySet </h1>;
      case 9:
        return <h1> Date & Time </h1>;
      case 10:
        return <h1> Confirm </h1>;
      case 11:
        return <h1> Gracias </h1>;
    }
  }
}

export default Orderform;
