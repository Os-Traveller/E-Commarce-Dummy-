import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <section className="Nav-section">
      <nav className="Nav-container container mx-auto flex items-center justify-between">
        <h1>G-BAY</h1>
        <ul className="flex align-center">
          <li>
            <Link className="decoration-none text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="decoration-none text-white" to="products">
              Products
            </Link>
          </li>
          <li>
            <Link className="decoration-none text-white" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="decoration-none text-white" to="/">
              Profile
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <Link className="decoration-none text-white" to="login">
            <button className="btn-inverse">Login</button>
          </Link>
          <Link className="decoration-none text-white" to="signup">
            <button className="btn">Join Us &rarr; </button>
          </Link>
        </div>
      </nav>
    </section>
  );
}
