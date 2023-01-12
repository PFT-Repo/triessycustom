import React, { Component } from "react";
import "./Body.css";
import Orderform from "./OrderForm/OrderForm";

class Body extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <React.Fragment className="App-body">
        <Orderform />
      </React.Fragment>
    );
  }
}

export default Body;
