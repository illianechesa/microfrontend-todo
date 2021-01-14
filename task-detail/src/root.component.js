import React, { Component } from "react";
import "./root.component.css";
import TaskDetail from "./components/TaskDetail";
import axios from "axios";

class Root extends Component {
  state = {
    task: {},
  };

  componentDidMount() {
    window.showDetail = (id) => {
      axios
        .get(`http://localhost:3000/tasks/${id}`)
        .then((res) => this.setState({ task: res.data }));
    };
  }

  render() {
    return (
      <div className="container3">
        <h3>Task Details</h3>
        <div className="taskDetail">
          <React.Fragment>
            <TaskDetail task={this.state.task} />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Root;
