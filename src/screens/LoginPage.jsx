import React from "react";
import { useState } from "react";
import Button from "../components/button";

function LoginPage() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="loginPage">
      <div>
        <div className="logoContainer">
          <img
            src="src\assets\images\logo.png"
            alt="logo"
            className="logo-large"
          />
          <div className="loginSignUpContainer">
            <p>Login</p>
            <p>Sign-up</p>
          </div>
        </div>

        <form className="formContainer" onSubmit={handleSubmit}>
          <label htmlFor="Email address">Email address:</label>
          <input
            type="email"
            id="emailAddress"
            value={emailAddress}
            onChange={handleEmailAddressChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </form>
      </div>
      <Button label={"Login"} className={"primary"} />
    </div>
  );
}

export default LoginPage;
