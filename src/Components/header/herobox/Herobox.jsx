import React from "react";
import { Link } from "react-router-dom";
import "./Herobox.css";

export default function Herobox(props) {
  return (
    <div className="Herobox-container flex flex-column gap-2 text-center">
      <h2>Hi {props.user}</h2>
      <h1>
        Best products to show off. Although nobody trust us. <br /> But Don't worry your money is safe to us
      </h1>
      <div className="flex items-center justify-center gap-2">
        <Link to="signup">
          <button className="btn">Join Us</button>
        </Link>
        <Link to="login">
          <button className="btn-inverse">Login</button>
        </Link>
      </div>
    </div>
  );
}
