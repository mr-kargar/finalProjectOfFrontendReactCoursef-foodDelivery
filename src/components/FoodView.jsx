import React from "react";

function FoodView(props) {
  
  return (
    <div className="foodView">
      <img src="src\assets\images\Mask Group.png" alt={props.food.name} />
      <div className="foodView-content">
        <h1 className="foodView-content-title">{props.food.name}</h1>
        <h1 className="foodView-content-price">{props.food.price}</h1>
      </div>
    </div>
  );
}

export default FoodView;
