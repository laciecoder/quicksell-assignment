import "./Name.css";

export default function Name({ name, isAvailable }) {
  function process(name) {
    return name
      .split(" ")
      .map((part) => part[0].toUpperCase())
      .join("");
  }
  const editedName = process(name);
  return (
    <div className="name-icon">
      <div className="green circle">{editedName}</div>
      <div className={`circle-small ${isAvailable ? "present" : "absent"}`}>&nbsp;</div>
    </div>
  );
}
