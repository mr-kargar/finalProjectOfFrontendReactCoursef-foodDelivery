import React from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function startPage() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  }

  return (
    <div className="startPage">
      <div className="startPage-content">
        <div className="startPage-content-logoContainer">
          <img src="src\assets\images\logo.png" alt="logo" className="startPage-content-logoContainer-logo" />
        </div>
        <p>Food for Everyone</p>
        <img
          src="src\assets\images\startPageImage.png"
          alt="startPageImage"
          className="startPage-content-image"
        />
      </div>
      <Button label={"Get started"} className={"get-started"} onClick={handleClick} />
    </div>
  );
}

export default startPage;
