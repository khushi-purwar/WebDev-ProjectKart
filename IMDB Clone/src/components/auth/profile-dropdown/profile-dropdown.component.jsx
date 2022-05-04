import React from "react";
import { useHistory } from "react-router-dom";

const ProfileDropdown = ({ signOutStart, toggleDropdown, currentUser }) => {
  const history = useHistory();
  return (
    <div className={`${toggleDropdown ? "profile-dropdown" : "hide-display"}`}>
      <span className="name">
        {" "}
        {!!currentUser.displayName
          ? currentUser.displayName.split(" ")[0]
          : "Unknown"}
      </span>
      <span onClick={() => history.push("/watchlist")}>Your watchlist</span>
      <span onClick={() => history.push("/account")}>Account settings</span>
      <span onClick={() => signOutStart()}>Sign out</span>
    </div>
  );
};

export default ProfileDropdown;
