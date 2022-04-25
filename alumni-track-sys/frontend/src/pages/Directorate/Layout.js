import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMain from "../../pages/College/SidebarMain";
import { Navigate } from "react-router-dom";
import ls from "localstorage-slim";

export default function Layout() {
  // const role = ls.get('role', { decrypt: true });
  // const auth = localStorage.getItem("isAuthenticated")
  // if(!auth){
  //   console.log("Not Authenticated")
  //   return <Navigate to='/'/>
  // }
  // if (role=== 'college'){
  //   console.log("Not Role")
  return (
    <div className="MainDiv" style={{ display: "flex" }}>
      <SidebarMain />

      <Outlet />
    </div>
  );
}
// else{
//   return <Navigate to='/'/>
// }
// }
