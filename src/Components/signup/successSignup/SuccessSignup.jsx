import React from "react";
import { Link } from "react-router-dom";
import "./SuccessSignup.css";

export default function SuccessSignup(props) {
  return (
    <div className="SuccessSignup-container flex items-center justify-center text-center">
      <div>
        <h1 className="mb-2">
          Congratulations! {props.name} <br /> Your Account has been created succesfully
        </h1>
        <Link to="/login">
          <button className="btn-gbwt">Login Here!</button>
        </Link>
      </div>
    </div>
  );
}
