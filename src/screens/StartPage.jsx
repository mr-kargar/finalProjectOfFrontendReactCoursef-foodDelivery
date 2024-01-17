import React from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';

function startPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <motion.div
    animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
    className="startPage">
      <div className="startPage-content">
        <div className="startPage-content-logoContainer">
          <img
            src="src\assets\images\logo.png"
            alt="logo"
            className="startPage-content-logoContainer-logo"
          />
        </div>
        <p>Food for Everyone</p>
        <img
          src="src\assets\images\startPageImage.png"
          alt="startPageImage"
          className="startPage-content-image"
        />
      </div>
      <Button
        label={"Get started"}
        className={"get-started startPage-button"}
        onClick={handleClick}
      />
    </motion.div>
  );
}

export default startPage;
