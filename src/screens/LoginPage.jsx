import React from "react";
import { useState } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/userSlice";
import Alert from "../components/Alert";

function LoginPage() {
  const [alertAllField, setAlertAllField] = useState(false);
  const [alertLogin, setAlertLogin] = useState(false);
  const [alertLoginSuccess, setAlertLoginSuccess] = useState(false);

  const [alertConfirmPassword, setAlertConfirmPassword] = useState(false);
  const [alertSignUp, setAlertSignUp] = useState(false);
  const [alertSignUpSuccess, setAlertSignUpSuccess] = useState(false);

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
      setAlertAllField(true);
      setTimeout(() => {
        setAlertAllField(false);
      }, "2000");
      return;
    } else {
      try {
        const userData = { email, password };
        const response = dispatch(userLogin(userData));
        console.log(response);
        if (response) {
          setAlertLoginSuccess(true);
          setTimeout(() => {
            navigate("/home");
          }, "2000");
        } else {
          setAlertLogin(true);
          setTimeout(() => {
            setAlertLogin(false);
          }, "2000");
        }
      } catch (error) {
        setAlertLogin(true);
        setTimeout(() => {
          setAlertLogin(false);
        }, "2000");
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
      setAlertAllField(true);
      setTimeout(() => {
        setAlertAllField(false);
      }, "2000");
      return;
    } else if (password !== passwordConfirm) {
      setAlertConfirmPassword(true);
      setTimeout(() => {
        setAlertConfirmPassword(false);
      }, "2000");

      return;
    } else {
      try {
        const response = await axios.post("http://localhost:3000/sign-up", {
          email,
          password,
        });

        if (response.status === 200) {
          setAlertSignUpSuccess(true);
          setTimeout(() => {
            setAlertSignUpSuccess(false);
            setShow(true);
          }, "2000");
        } else {
          setAlertSignUp(true);
          setTimeout(() => {
            setAlertSignUp(false);
          }, "2000");
        }
      } catch (error) {
        setAlertSignUp(true);
        setTimeout(() => {
          setAlertSignUp(false);
        }, "2000");
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
          <Alert
            class={`${alertAllField ? "show" : null} alert-error`}
            message={"Please fill all the fields"}
          />

          <Alert
            class={`${alertLogin ? "show" : null} alert-error`}
            message={"Something went wrong : check your Email and password"}
          />
          <Alert
            class={`${alertLoginSuccess ? "show" : null} alert-success`}
            message={"Login successfully"}
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
          <Alert
            class={`${alertAllField ? "show" : null} alert-error`}
            message={"Please fill all the fields"}
          />

          <Alert
            class={`${alertConfirmPassword ? "show" : null} alert-error`}
            message={"Password and Confirm Password should be same"}
          />

          <Alert
            class={`${alertSignUp ? "show" : null} alert-error`}
            message={"Something went wrong"}
          />
          <Alert
            class={`${alertSignUpSuccess ? "show" : null} alert-success`}
            message={"User created successfully"}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
