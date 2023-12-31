import React from "react";
import FoodInCart from "../components/FoodInCart";
import Button from "../components/Button";

function CartPage() {
  return (
    <div className="cartPage">
      <div className="header">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h3>Cart</h3>
        
      </div>
      <div>
          <FoodInCart />
        </div>
        <Button label={"Complete order"} className={"primary"} />
    </div>
  );
}

export default CartPage;
