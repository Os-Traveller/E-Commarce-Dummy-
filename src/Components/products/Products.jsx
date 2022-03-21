import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <button>
        <Link to="/bill" className="btn">
          Submit
        </Link>
      </button>
    </div>
  );
}
