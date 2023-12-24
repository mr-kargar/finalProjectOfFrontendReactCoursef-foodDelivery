import React from "react";
import Button from "../components/button";

function startPage() {
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
      <Button label={"Get started"} className={"get-started"} />
    </div>
  );
}

export default startPage;
