import React from "react";
import Button from "../components/button";

function startPage() {
  return (
    <div className="startPage">
      <div>
        <div className="imageContainer">
          <img src="src\assets\images\logo.png" alt="logo" className="logo" />
        </div>
        <p>Food for Everyone</p>
        <img
          src="src\assets\images\startPageImage.png"
          alt="startPageImage"
          className="startPageImage"
        />
      </div>
      <Button label={"Get started"} className={"get-started"} />
    </div>
  );
}

export default startPage;
