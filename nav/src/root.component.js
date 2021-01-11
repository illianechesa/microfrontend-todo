import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/task-list" className="link">
          Task list
        </Link>
        <Link to="/create-task" className="link">
          Create task
        </Link>
        <h2>Todo Application</h2>
      </nav>
    </BrowserRouter>
  );
}
