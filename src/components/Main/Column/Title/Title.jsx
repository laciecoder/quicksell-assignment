import Name from "../Name/Name";
import "./Title.css";

import ThreeDots from "../../../../assets/3 dot menu.svg";
import Plus from "../../../../assets/add.svg";

export default function Title({ title, isName, icon, length, isAvailable }) {
  return (
    <div className="title-container">
      <div className="title-start">
        {isName ? (
          <Name name={title} isAvailable={isAvailable} />
        ) : (
          <img src={icon} alt="icon" />
        )}
        {title}
        <p className="length">{length}</p>
      </div>
      <div className="title-end">
        <img src={Plus} alt="Plus Icon" />
        <img src={ThreeDots} alt="Three Dots Icon" />
      </div>
    </div>
  );
}
