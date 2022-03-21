import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginSvg from "../../img/login.svg";
import userSvg from "../../img/user.svg";
import { logInDb } from "../../utilities/LoginManager";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(true);
  const [passwordCorrect, setPasswordCorrect] = useState(true);
  const path = useNavigate();

  // * handler function
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginHandler = () => {
    console.log("form Submitted");
  };
  const onLoginFormSubmit = (event) => {
    event.preventDefault();
    const { isEmailFound, isPasswordMatched } = logInDb({ email, password });
    setEmailCorrect(isEmailFound);
    setPasswordCorrect(isPasswordMatched);
    if (!isEmailFound) setEmail("");
    if (!isPasswordMatched) setPassword("");

    if (isEmailFound && isPasswordMatched) {
      setEmail("");
      setPassword("");
      path("/");
    }
  };

  return (
    <section className="Login-section flex items-center justify-center">
      <div className="Login-container mx-auto">
        <img src={loginSvg} alt="" />
        <form onSubmit={onLoginFormSubmit} className="Login-form flex flex-column gap-2">
          <img src={userSvg} alt="" />
          <h1>Please, Login Here!</h1>
          <input onChange={emailHandler} className={emailCorrect ? "" : "input-error-warning"} type="email" placeholder={emailCorrect ? "Email" : "Email is not valid"} value={email} required />
          <input onChange={passwordHandler} className={passwordCorrect ? "" : "input-error-warning"} type="password" placeholder={passwordCorrect ? "Password" : "Wrong Password"} value={password} required />
          <button onClick={loginHandler} className="btn-gb">
            Login
          </button>
        </form>
      </div>
      <div className="Login-overlay"></div>
    </section>
  );
}
