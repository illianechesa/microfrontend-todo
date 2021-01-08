import React from "react";
import "./root.component.css";

export default function Root() {
  return (
    <nav className="nav">
      <a href="/task-list" className="link">
        Task List
      </a>
      <a href="/create-task" className="link">
        Create Task
      </a>
    </nav>
  );
}
