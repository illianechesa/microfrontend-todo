import React, { Component } from "react";
import PropTypes from "prop-types";

export class TaskDetail extends Component {
  handleEdit = (id) => {
    window.dispatchEvent(new CustomEvent("editTask", { detail: id }));
  };

  render() {
    const { id, title, description, date, completed } = this.props.task;
    const humanDate = new Date(date);
    const completeMessage = completed ? "Yes" : "No";
    return (
      <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Is completed: {completeMessage}</p>
        <p>Due Date: {humanDate.toDateString()}</p>
        <button onClick={this.handleEdit.bind(this, id)}>Edit</button>
      </div>
    );
  }
}

PropTypes;
TaskDetail.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskDetail;
