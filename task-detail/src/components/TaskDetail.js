import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export class TaskDetail extends Component {
  state = {
    completed: false,
  };

  updateCompleted(id) {
    if (id !== undefined) {
      axios
        .get(`http://localhost:3000/tasks/${id}`)
        .then((res) => this.setState({ completed: res.data.completed }));
    }
  }

  render() {
    const { id, title, description, date } = this.props.task;
    this.updateCompleted(id);
    const humanDate = new Date(date);
    const completeMessage = this.state.completed ? "Yes" : "No";
    return (
      <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Is completed: {completeMessage}</p>
        <p>Due Date: {humanDate.toDateString()}</p>
      </div>
    );
  }
}

PropTypes;
TaskDetail.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskDetail;
