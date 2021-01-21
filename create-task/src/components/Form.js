import React, { Component } from "react";
import "./Form.css";
export class Form extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <p>
            Name: <input type="text" name="title" />
          </p>
          <p>
            Description: <input type="text" name="description" />
          </p>
          <p>
            Due date: <input type="date" name="date" />
          </p>
          <input type="submit" value="Add" />
          <input type="reset" value="Reset"></input>
        </form>
      </div>
    );
  }
}

export default Form;
