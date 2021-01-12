import React, { Component } from "react";
import "./root.component.css";
import axios from "axios";

class Root extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/tasks")
      .then((res) => this.setState({ todos: res.data }));
  }

  render() {
    return (
      <div className="container3">
        Here will be placed the detail of the task
      </div>
    );
  }
}

export default Root;
