import React from "react";
import { Link } from "react-router-dom";

export default function UserInfo() {
  return (
    <div>
      <h1>UserInfo</h1>
      <button>
        <Link to="/products">Products</Link>
      </button>
    </div>
  );
}
