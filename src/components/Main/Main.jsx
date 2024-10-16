import { PRIORITY_ICONS, STATUS_ICONS } from "../../constants.js";
import { sortByOptions } from "../../utils";
import Column from "./Column/Column.jsx";
import "./Main.css";

function getIcons(groupingType) {
  switch (groupingType) {
    case "Status":
      return STATUS_ICONS;
    case "Priority":
      return PRIORITY_ICONS;
    default:
      return null;
  }
}

export default function Main({ tickets, users, details }) {
  const data = sortByOptions(details, tickets, users);
  const icons = getIcons(details.Grouping);
  const isName = details.Grouping === "User";
  const isStatus = details.Grouping === "Status";
  return (
    <main>
      {Object.entries(data).map(([title, cards], idx) => (
        <Column
          title={title}
          cards={cards}
          key={title}
          icon={icons && icons[idx]}
          isName={isName}
          isStatus={isStatus}
          isAvailable={!icons && users[cards[0].idx].available}
        />
      ))}
    </main>
  );
}
