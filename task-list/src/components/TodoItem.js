import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Link } from "react-router-dom";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      margin: "0px 20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      width: "100%",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div
        role="button"
        tabIndex={-1}
        style={this.getStyle()}
        onClick={() => window.showDetail(id)}
      >
        <p>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

PropTypes;
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#828282",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "20%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
