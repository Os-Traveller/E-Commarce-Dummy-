import React from "react";
import "./Header.css";
import Nav from "./nav/Nav";
import Herobox from "./herobox/Herobox";

export default function Header() {
  let user = "";
  let usersName = localStorage.getItem("activeUser");
  let allUserData = JSON.parse(localStorage.getItem("users"));
  if (usersName && allUserData) {
    for (const data of allUserData) {
      if (data.userName === usersName) {
        user = data.name;
        user = user.slice(0, user.indexOf(" "));
      }
    }
  }
  return (
    <div className="Header-container">
      <Nav />
      <Herobox user={user} />
    </div>
  );
}
