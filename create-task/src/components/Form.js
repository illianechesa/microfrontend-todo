import React, { Component } from "react";
import "./Form.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeDate(event) {
    this.setState({ date: event.target.value });
  }

  reset = (event) => {
    this.setState({ title: "", description: "", date: "" });
    event.preventDefault();
  };

  handleSubmit(event) {
    if (this.state.title && this.state.description && this.state.date) {
      axios.post("http://localhost:3000/tasks/", {
        id: uuidv4(),
        title: this.state.title,
        description: this.state.description,
        completed: false,
        date: new Date(this.state.date),
      });
      window.dispatchEvent(new CustomEvent("addTask", {}));
      alert("Task created successfully");
    } else {
      alert("Please fulfil all the data");
    }
    event.preventDefault();
  }

  render() {
    window.addEventListener("editTask", (e) => {
      const id = e.detail;
      axios.get(`http://localhost:3000/tasks/${id}`).then((res) =>
        this.setState({
          title: res.data.title,
          description: res.data.description,
          date: new Date(res.data.date).toISOString().slice(0, 10),
        })
      );
    });
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <p>
            Name (Max. 25 characters):{" "}
            <input
              type="text"
              maxLength="25"
              value={this.state.title}
              onChange={this.handleChangeName}
            />
          </p>
          <p>
            Description:{" "}
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleChangeDescription}
            />
          </p>
          <p>
            Due date:{" "}
            <input
              type="date"
              value={this.state.date}
              onChange={this.handleChangeDate}
            />
          </p>
          <input type="submit" value="Add" />
          <button onClick={this.reset}>Reset</button>
        </form>
      </div>
    );
  }
}

export default Form;
