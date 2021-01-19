import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
