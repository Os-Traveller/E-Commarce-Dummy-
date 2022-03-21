import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Products from "./Components/products/Products";
import Bill from "./Components/bill/Bill";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";
import SuccessSignup from "./Components/signup/successSignup/SuccessSignup";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="products" element={<Products />} />
      <Route path="bill" element={<Bill />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="success" element={<SuccessSignup />} />
      <Route path="*" element={<h1>No page Found</h1>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
