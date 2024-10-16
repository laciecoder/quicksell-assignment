import "./Navbar.css";
import Popup from "./Popup/Popup.jsx";
import Details from "../../assets/Display.svg";
import Down from "../../assets/down.svg";

export default function Navbar({ details, setDetails, showPopup, setShowpopup }) {
  return (
    <header className="navbar">
      <div>
        <button
          onClick={() => setShowpopup((prev) => !prev)}
          className="display_button"
        >
          <img src={Details} alt="Details SVG" />
          <p>Display</p>
          <img src={Down} alt="Down arrow svg" />
        </button>
        {showPopup && <Popup setDetails={setDetails} details={details}/>}
      </div>
    </header>
  );
}
