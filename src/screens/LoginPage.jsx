import React from "react";
import { useState } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/userSlice";

function LoginPage() {
  const [show, setShow] = useState(true);

  function showForm() {
    setShow(!show);
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailAddressLogin").value;
    const password = document.getElementById("passwordLogin").value;
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    } else {
      try {
        const userData = { email, password };
        const response =dispatch(userLogin(userData));
        if (response) {
          alert("Login successfully");
          navigate("/home");
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    }
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailAddressSignUp").value;
    const password = document.getElementById("passwordSignUp").value;
    const passwordConfirm = document.getElementById(
      "passwordConfirmSignUp"
    ).value;
    if (email === "" || password === "" || passwordConfirm === "") {
      alert("Please fill all the fields");
      return;
    } else if (password !== passwordConfirm) {
      alert("Password and Confirm Password should be same");
      return;
    } else {
      try {
        const response = await axios.post("http://localhost:3000/sign-up", {
          email,
          password,
        });

        if (response.status === 200) {
          alert("User created successfully");
          setShow(true);
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    }
  };

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
          <input type="email" id="emailAddressLogin" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="passwordLogin" />
          <Button
            label={"Login"}
            className={"primary"}
            onClick={loginHandler}
          />
        </form>

        <form
          className={`loginPage-content-formContainer signUpMargin ${
            show ? null : "show"
          }`}
        >
          <label htmlFor="Email address">Email address:</label>
          <input type="email" name="Email address" id="emailAddressSignUp" />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="passwordSignUp" />
          <label htmlFor="passwordConfirm">Password Confirm :</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirmSignUp"
          />
          <Button
            label={"Sign Up"}
            className={"primary"}
            onClick={signUpHandler}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
