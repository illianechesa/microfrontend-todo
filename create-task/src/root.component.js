import React, { Component } from "react";
import "./root.component.css";
import Form from "./components/Form";
class Root extends Component {
  state = {
    task: {},
  };

  render() {
    return (
      <div className="container2">
        <React.Fragment>
          <Form />
        </React.Fragment>
      </div>
    );
  }
}

export default Root;
