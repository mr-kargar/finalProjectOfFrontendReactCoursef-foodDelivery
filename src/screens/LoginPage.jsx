import React from "react";
import { useState } from "react";
import Button from "../components/button";

function LoginPage() {
  const [show, setShow] = useState(true);

  function showForm() {
    setShow(!show);
  }

  return (
    <div className="loginPage">
      <div>
        <div className="logoContainer">
          <img
            src="src\assets\images\logo.png"
            alt="logo"
            className="logo-large"
          />
          <div className="loginSignUpContainer" onClick={showForm}>
            <p className={`${show ? "showBorder" : null}`}>Login</p>
            <p className={`${show ? null : "showBorder"}`}>Sign-up</p>
          </div>
        </div>

        <form className={`formContainer loginMargin ${show ? "show" : null}`}>
          <label htmlFor="Email address">Email address:</label>
          <input type="email" id="emailAddress" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <Button label={"Login"} className={"primary"} />
        </form>

        <form className={`formContainer signUpMargin ${show ? null : "show"}`}>
          <label htmlFor="Email address">Email address:</label>
          <input type="email" id="emailAddress" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <label htmlFor="passwordConfirm">Password Confirm :</label>
          <input type="password" id="passwordConfirm" />
          <Button label={"Sign Up"} className={"primary"} />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
