import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMain from "../../Components/Others/SidebarMain";
import { Navigate } from "react-router-dom";
import ls from "localstorage-slim";

export default function Layout() {
  const role = ls.get("role", { decrypt: true });
  console.log(role);

  const auth = localStorage.getItem("isAuthenticated");
  if (!auth) {
    console.log("Not Authenticated");
    return <Navigate to="/" />;
  }
  if (role === "alumni") {
    console.log("Not Role");

    return (
      <div style={{ display: "flex" }} className="MainDiv">
        <SidebarMain />

        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
}
