import { GROUPING_VALUES, ORDERING_VALUES } from "../../../constants.js";

import "./Popup.css";

function Select({ options, details, setDetails, title }) {
  function handleChange(e) {
    setDetails((prev) => ({ ...prev, [title]: e.target.value }));
  }
  return (
    <div className="select-ordering">
      <p>{title}</p>
      <select value={details[title]} onChange={handleChange}>
        {options.map((choice) => (
          <option key={choice}>{choice}</option>
        ))}
      </select>
    </div>
  );
}

export default function Popup({ details, setDetails }) {
  return (
    <div className="popup">
      <Select
        options={GROUPING_VALUES}
        details={details}
        title={"Grouping"}
        setDetails={setDetails}
      />
      <Select
        options={ORDERING_VALUES}
        details={details}
        title={"Ordering"}
        setDetails={setDetails}
      />
    </div>
  );
}
