import React, { Component } from "react";
import "./Form.css";
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

  handleSubmit(event) {
    if (this.state.title && this.state.description && this.state.date) {
      alert("All data is correct");
    } else {
      alert("Please fulfil all the data");
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <p>
            Name:{" "}
            <input
              type="text"
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
          <input type="reset" value="Reset"></input>
        </form>
      </div>
    );
  }
}

export default Form;
