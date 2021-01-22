import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
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
      <BrowserRouter>
        <div>
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Is completed: {completeMessage}</p>
          <p>Due Date: {humanDate.toDateString()}</p>
          <Link to="/create-task" className="link">
            <button onClick={this.handleEdit.bind(this, id)}>Edit</button>
          </Link>
        </div>
      </BrowserRouter>
    );
  }
}

PropTypes;
TaskDetail.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskDetail;
