import React from "react";
import { useState } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/userSlice";
import Alert from "../components/Alert";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function LoginPage() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [passwordConfirmSignUp, setPasswordConfirmSignUp] = useState("");

  const [alertAllField, setAlertAllField] = useState(false);
  const [alertLogin, setAlertLogin] = useState(false);
  const [alertLoginSuccess, setAlertLoginSuccess] = useState(false);

  const [alertConfirmPassword, setAlertConfirmPassword] = useState(false);
  const [alertSignUp, setAlertSignUp] = useState(false);
  const [alertSignUpSuccess, setAlertSignUpSuccess] = useState(false);
  const [alertPasswordFormat, setAlertPasswordFormat] = useState(false);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const [show, setShow] = useState(true);

  function showForm() {
    setShow(!show);
    setEmailLogin("");
    setPasswordLogin("");
    setEmailSignUp("");
    setPasswordSignUp("");
    setPasswordConfirmSignUp("");
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

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
      const userData = { email, password };
      dispatch(userLogin(userData)).then((data) => {
        if (data.payload.token) {
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
      });
    }
  };

  const signUpHandler = async (e) => {
    e.preventDefault();

    if (
      emailSignUp === "" ||
      passwordSignUp === "" ||
      passwordConfirmSignUp === "" ||
      !validateEmail(emailSignUp)
    ) {
      setAlertAllField(true);
      setTimeout(() => {
        setAlertAllField(false);
      }, "2000");
      return;
    } else if (passwordSignUp !== passwordConfirmSignUp) {
      setAlertConfirmPassword(true);
      setTimeout(() => {
        setAlertConfirmPassword(false);
      }, "2000");

      return;
    } else if (passwordSignUp.length < 6 || passwordSignUp.includes(" ")) {
      setAlertPasswordFormat(true);
      setTimeout(() => {
        setAlertPasswordFormat(false);
      }, "2000");
      return;
    } else {
      console.log(emailSignUp, passwordSignUp);
      try {
        const response = await axios.post("http://localhost:3000/sign-up", {
          email: emailSignUp,
          password: passwordSignUp,
        });

        if (response.status === 200) {
          setAlertSignUpSuccess(true);
          setTimeout(() => {
            setAlertSignUpSuccess(false);
            setShow(true);
            setEmailSignUp("");
            setPasswordSignUp("");
            setPasswordConfirmSignUp("");
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
    <motion.div
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay: 0.1,
    }}
    initial={{ opacity: 0, scale: 0.5 }}
      className="loginPage"
    >
      <div className="loginPage-content">
        <div className="loginPage-content-topContainer">
          <img src="src\assets\images\logo.png" alt="logo" />
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
          <input
            type="email"
            id="emailAddressLogin"
            autoComplete="off"
            onChange={(e) => setEmailLogin(e.target.value)}
            value={emailLogin}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="passwordLogin"
            autoComplete="off"
            onChange={(e) => setPasswordLogin(e.target.value)}
            value={passwordLogin}
          />
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
          <input
            type="email"
            name="Email address"
            id="emailAddressSignUp"
            onChange={(e) => setEmailSignUp(e.target.value)}
            value={emailSignUp}
            autoComplete="off"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="passwordSignUp"
            onChange={(e) => setPasswordSignUp(e.target.value)}
            value={passwordSignUp}
            autoComplete="off"
          />
          <label htmlFor="passwordConfirm">Password Confirm :</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirmSignUp"
            onChange={(e) => setPasswordConfirmSignUp(e.target.value)}
            value={passwordConfirmSignUp}
            autoComplete="off"
          />
          <Button
            label={"Sign Up"}
            className={"primary"}
            onClick={signUpHandler}
          />
          <Alert
            class={`${alertAllField ? "show" : null} alert-error`}
            message={"Please fill all the fields OR check your email"}
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
            message={"User created successfully , please login"}
          />

          <Alert
            class={`${alertPasswordFormat ? "show" : null} alert-error`}
            message={
              "please enter a valid password format with at least 6 characters and without space"
            }
          />
        </form>
      </div>
    </motion.div>
  );
}

export default LoginPage;
