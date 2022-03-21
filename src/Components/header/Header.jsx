import React from "react";
import "./Header.css";
import Nav from "./nav/Nav";
import Herobox from "./herobox/Herobox";

export default function Header() {
  return (
    <div className="Header-container">
      <Nav />
      <Herobox />
    </div>
  );
}
