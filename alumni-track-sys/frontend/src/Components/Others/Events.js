import React from "react";
import Showholiday from "./ShowHolidays";
// import UserDropdown from "../Usercomponents/UserDropdown";
import AddEvent from "./AddEvent";

export default function Events({ role }) {
  return role == "college" ? (
    <div
      style={{
        marginLeft: "400px",
        marginTop: "50px",
        width: "1000px",
        height: "600px",
      }}
    >
      <AddEvent />

      {/* <UserDropdown/> */}

      {/* <h1 style={{ textAlign: "center", color: "darkblue" }}>Holiday</h1> */}

      <Showholiday />
    </div>
  ) : (
    <div
      style={{
        marginLeft: "400px",
        // marginTop: "50px",
        width: "1000px",
        height: "600px",
      }}
    >
      {/* <AddEvent /> */}

      {/* <UserDropdown/> */}

      {/* <h1 style={{ textAlign: "center", color: "darkblue" }}>Holiday</h1> */}

      <Showholiday />
    </div>
  );
}
