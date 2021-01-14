import React, { Component } from "react";
import PropTypes from "prop-types";

export class TaskDetail extends Component {
  render() {
    const { id, title, description, markComplete, date } = this.props.task;
    const humanDate = new Date(date);
    const completeMessage = markComplete ? "Yes" : "No";
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
