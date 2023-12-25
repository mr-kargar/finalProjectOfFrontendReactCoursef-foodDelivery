import React from "react";
import { useState } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [show, setShow] = useState(true);

  function showForm() {
    setShow(!show);
  }

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }

  return (
    <div className="loginPage">
      <div className="loginPage-content">
        <div className="loginPage-content-topContainer">
          <img
            src="src\assets\images\logo.png"
            alt="logo"
            className="loginPage-content-logoContainer-logo"
          />
          <div
            className="loginPage-content-topContainer-loginSignUpContainer"
            onClick={showForm}
          >
            <p className={`${show ? "showBorder" : null}`}>Login</p>
            <p className={`${show ? null : "showBorder"}`}>Sign-up</p>
          </div>
        </div>

        <form
          className={`loginPage-content-formContainer loginMargin ${
            show ? "show" : null
          }`}
        >
          <label htmlFor="Email address">Email address:</label>
          <input type="email" id="emailAddress" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <Button label={"Login"} className={"primary"} onClick={handleClick} />
        </form>

        <form
          className={`loginPage-content-formContainer signUpMargin ${
            show ? null : "show"
          }`}
        >
          <label htmlFor="Email address">Email address:</label>
          <input type="email" id="emailAddress" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <label htmlFor="passwordConfirm">Password Confirm :</label>
          <input type="password" id="passwordConfirm" />
          <Button label={"Sign Up"} className={"primary"} onClick={handleClick}/>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
