import React from "react";
import FoodInCart from "../components/FoodInCart";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitOrder } from "../redux/orderSlice";
import { clearCartAction } from "../redux/cartSlice";
import { motion } from "framer-motion";

function CartPage() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();


  function handelStartOrdering() {
    navigate("../home");
  }

  function handleCompleteOrder() {
    const orderItem = cartItems.map((item) => {
      return { menuItemId: item._id, quantity: item.quantity };
    });

    const order = { token: token, orderItems: orderItem };

    const response = dispatch(submitOrder({ order })).then((res) => {

      navigate(`./payment/${res.payload.data._id}`);
    });
  }

  return (
    <motion.div
    animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
    className="cartPage">
      <div className="header">
        <svg
                onClick={() => navigate(-1)}

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
      <svg
        className="cartPage-clearCartIcon"
        onClick={() => dispatch(clearCartAction())}
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="20px"
        height="20px"
        viewBox="0 0 408.483 408.483"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316
			H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293
			c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329
			c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355
			c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356
			c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"
            />
            <path
              d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916
			c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"
            />
          </g>
        </g>
      </svg>
      {localStorage.getItem("cart") ? (
        <div className="cartPage-content">
          {cartItems.map((item) => {
            return <FoodInCart key={item._id} item={item} />;
          })}
        </div>
      ) : (
        <div className="cartPage-contentEmpty">
          <h1>Cart is empty</h1>
        </div>
      )}

      <Button
        label={`${localStorage.getItem("cart") ? "Complete order" : "Start Ordering"}`}
        className={"primary button-bottom"}
        onClick={localStorage.getItem("cart") ? handleCompleteOrder : handelStartOrdering}
      />
    </motion.div>
  );
}

export default CartPage;
