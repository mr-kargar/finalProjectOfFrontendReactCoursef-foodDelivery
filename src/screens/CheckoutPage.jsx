import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitPayment } from "../redux/paymentSlice";
import { clearCartAction } from "../redux/cartSlice";
import { getOrderById } from "../redux/orderSlice";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

function CheckoutPage() {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getOrderById({ token, id }));
  }, []);
  const orderId = useSelector((state) => state.order.order);

  function handlePayment() {
    dispatch(submitPayment({ token, orderId })).then((res) => {
      if (res.payload) {
        setMessage(`Payment :  ${res.payload.data.status}`);
        dispatch(clearCartAction());
        setTimeout(() => {
          navigate("/home");
        }, "5000");
      }
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
    className="checkoutPage">
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

        <h3>Payment</h3>
      </div>
      <div className="checkoutPage-content">
        {orderId.data ? (
          <div>
            <h2>Total: {orderId.data.totalAmount}</h2>
            <p>{message}</p>
          </div>
        ) : (
          <Loader />
        )}
      </div>

      <Button
        label={"Payment"}
        className={"primary button-bottom"}
        onClick={handlePayment}
      />
    </motion.div>
  );
}

export default CheckoutPage;
