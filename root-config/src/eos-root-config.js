import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication("@eos/nav", () => System.import("@eos/nav"), isActive.nav, {
  domElement: document.getElementById("nav-container"),
});

registerApplication(
  "@eos/task-list",
  () => System.import("@eos/task-list"),
  isActive.taskList,
  { domElement: document.getElementById("task-list-container") }
);

registerApplication(
  "@eos/create-task",
  () => System.import("@eos/create-task"),
  isActive.createTask,
  { domElement: document.getElementById("create-task-container") }
);

registerApplication(
  "@eos/task-detail",
  () => System.import("@eos/task-detail"),
  isActive.taskDetail,
  { domElement: document.getElementById("task-detail-container") }
);

start();
