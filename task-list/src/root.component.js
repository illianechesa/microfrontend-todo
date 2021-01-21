import React, { Component } from "react";
import "./root.component.css";
import Todos from "./components/Todos";
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

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          axios.put(`http://localhost:3000/tasks/${id}`, {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            completed: todo.completed,
            date: todo.date,
          });
        }
        window.showDetail(id);
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then((res) =>
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      })
    );
  };

  render() {
    window.addEventListener("addTask", () => {
      axios
        .get("http://localhost:3000/tasks")
        .then((res) => this.setState({ todos: res.data }));
    });
    return (
      <div className="container1">
        <div className="taskList">
          <React.Fragment>
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo}
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Root;
