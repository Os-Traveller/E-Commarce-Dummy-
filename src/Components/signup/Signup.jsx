import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import accountSvg from "../../img/signup.svg";
import userSvg from "../../img/user.svg";
// * imported functions
import { signUpDataToDb } from "../../utilities/signupManager";

export default function Signup() {
  // * testing
  // * all state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isUserNameUnique, setIsUserNameunique] = useState(true);
  const [isEmailUnique, setIsEmailUnique] = useState(true);
  const [isPassMatched, setIsPassMatched] = useState("true");
  const path = useNavigate();

  // * helping function
  const allClear = () => {
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
  };

  // * handler function
  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const userNamelHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPassHandler = (event) => {
    setConfirmPass(event.target.value);
  };

  const SignupFormHandler = (event) => {
    event.preventDefault();

    let newUser = {
      userName: userName,
      name: firstName + " " + lastName,
      email: email,
      password: password,
      confirmPass: confirmPass,
    };

    const { passMatch, uniqueUsername, uniqueEmail } = signUpDataToDb(newUser);
    setIsPassMatched(passMatch);
    setIsUserNameunique(uniqueUsername);
    setIsEmailUnique(uniqueEmail);

    if (!isPassMatched) setConfirmPass("");
    if (!isEmailUnique) setEmail("");
    if (!isUserNameUnique) setUserName("");

    if (passMatch && uniqueEmail && uniqueUsername) {
      console.log("It works");
      allClear();
      path("/success");
    }
  };

  return (
    <section className="Signup-section flex items-center justify-center">
      <div className="Signup-container mx-auto">
        <img src={accountSvg} alt="" />
        <form className="Signup-form flex flex-column gap-2" onSubmit={SignupFormHandler}>
          <img src={userSvg} alt="" />
          <h2>Welcome!!</h2>
          <div className="flex gap-2 w-full">
            <input className="flex-grow-1" type="text" placeholder="First Name" value={firstName} onChange={firstNameHandler} required />
            <input className="flex-grow-1" type="text" placeholder="Last Name" value={lastName} onChange={lastNameHandler} required />
          </div>
          <input id="userName" className={isUserNameUnique ? "" : "input-error-warning"} type="text" placeholder={isUserNameUnique ? "Username" : "Username already exist"} value={userName} onChange={userNamelHandler} required />

          <input className={isEmailUnique ? "" : "input-error-warning"} type="email" placeholder={isEmailUnique ? "Email" : "This email is already taken"} value={email} onChange={emailHandler} required />
          <input type="password" placeholder="Password" value={password} onChange={passwordHandler} required />
          <input className={isPassMatched ? "" : "input-error-warning"} type="password" placeholder={isPassMatched ? "Confirm Password" : "Password did not match"} value={confirmPass} onChange={confirmPassHandler} required />
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="checkbox">
              <span>I accept the</span> Term and Condition
            </label>
          </div>

          <button className="btn">Signup</button>
        </form>
      </div>
      <div className="Signup-overlay"></div>
    </section>
  );
}
