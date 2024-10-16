import Backlog from "./assets/Backlog.svg";
import Todo from "./assets/To-do.svg";
import InProgress from "./assets/in-progress.svg";
import Done from "./assets/Done.svg";
import Canceled from "./assets/Cancelled.svg";

import NoPriority from "./assets/No-priority.svg";
import Low from "./assets/Img - Low Priority.svg";
import Mid from "./assets/Img - Medium Priority.svg";
import High from "./assets/Img - High Priority.svg";
import Urgent from "./assets/SVG - Urgent Priority colour.svg";

export const DEFAULT_DETAILS = {
  Grouping: "Status",
  Ordering: "Priority",
};

export const GROUPING_VALUES = ["Status", "User", "Priority"];

export const ORDERING_VALUES = ["Priority", "Title"];

export const STATUS_ICONS = [Backlog, Todo, InProgress, Done, Canceled];

export const PRIORITY_ICONS = [NoPriority, Low, Mid, High, Urgent];

export function getIcon(text) {
  switch (text) {
    case "Backlog":
      return Backlog;
    case "Todo":
      return Todo;
    case "In progress":
      return InProgress;
    default:
      return null;
  }
}
