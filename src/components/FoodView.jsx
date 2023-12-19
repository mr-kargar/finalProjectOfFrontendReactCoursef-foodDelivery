import React from "react";

function FoodView() {
  return (
    <div className="foodView">
      <img src="src\assets\images\Mask Group.png" alt="food" />
      <div className="foodView-content">
        <h1 className="foodView-content-title">foodName</h1>
        <h1 className="foodView-content-price">N1,900</h1>
      </div>
    </div>
  );
}

export default FoodView;
