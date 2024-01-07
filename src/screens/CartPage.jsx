import React from "react";
import FoodInCart from "../components/FoodInCart";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitOrder } from "../redux/orderSlice";

function CartPage() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  function handleCompleteOrder() {
    const orderItem = cartItems.map((item) => {
      return { menuItemId: item._id, quantity: item.quantity };
    });

    const order = { token: token, orderItems: orderItem };
    
    const response = dispatch(submitOrder({order})).then(() => {
      const totalItem = cartItems.map((item) => {
        return item.price * item.quantity;
      });
      let totalSum = 0;
      totalItem.forEach((item) => {
        totalSum += item;
      });

      navigate(`./payment/${totalSum}`);
    });
  }

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
      {localStorage.getItem("cart") ? (
        <div className="cartPage-content">
          {cartItems.map((item) => {
            return <FoodInCart key={item._id} item={item} />;
          })}
        </div>
      ) : (
        <h1>Cart is empty</h1>
      )}

      <Button
        label={"Complete order"}
        className={"primary "}
        onClick={handleCompleteOrder}
      />
    </div>
  );
}

export default CartPage;
