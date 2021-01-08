import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication("@eos/nav", () => System.import("@eos/nav"), isActive.nav);

registerApplication(
  "@eos/task-list",
  () => System.import("@eos/task-list"),
  isActive.taskList
);

registerApplication(
  "@eos/create-task",
  () => System.import("@eos/create-task"),
  isActive.createTask
);

start();
