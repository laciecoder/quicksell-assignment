import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import { DEFAULT_DETAILS } from "./constants.js";

export default function App() {
  const [details, setDetails] = useState(DEFAULT_DETAILS);
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [showPopup, setShowpopup] = useState(false);

  useEffect(() => {
    const newDetails = DEFAULT_DETAILS;
    if (localStorage.getItem("Grouping")) {
      newDetails.Grouping = localStorage.getItem("Grouping");
    }
    if (localStorage.getItem("Ordering")) {
      newDetails.Ordering = localStorage.getItem("Ordering");
    }
    setDetails({ ...newDetails });
  }, []);

  useEffect(() => {
    localStorage.setItem("Grouping", details.Grouping);
    localStorage.setItem("Ordering", details.Ordering);
  }, [details.Grouping, details.Ordering]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    getData();
  }, []);

  useEffect(() => {
    const body = document.getElementsByTagName("main")[0];
    const eventListener = body.addEventListener("click", () =>
      setShowpopup(false)
    );
    return () => {
      body.removeEventListener("click", eventListener);
    };
  }, []);

  return (
    <>
      <Navbar
        details={details}
        setDetails={setDetails}
        showPopup={showPopup}
        setShowpopup={setShowpopup}
      />
      <Main tickets={tickets} users={users} details={details} />
    </>
  );
}
