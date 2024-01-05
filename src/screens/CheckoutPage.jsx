import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitPayment } from "../redux/paymentSlice";

function CheckoutPage() {
const {totalSum} = useParams();
const [message , setMessage] = useState("");

const token = localStorage.getItem("token");
const orderId = useSelector((state) => state.order.order.data._id);

const navigate = useNavigate();
const dispatch = useDispatch();

function handlePayment() {
 dispatch(submitPayment({ token, orderId })).then((res) => {
if(res.payload){
  setMessage(`Payment ${res.payload.data.status}`);
  setTimeout(() => {
    navigate("/home");
  }, "5000");
}
 });
}

  return (
    <div className="checkoutPage">
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

        <h3>Payment</h3>
      </div>
      
        <h2>Total: {totalSum}</h2>
        <p>{message}</p>
      <Button label={"Payment"} className={"primary"} onClick={handlePayment} />
    </div>
  );
}

export default CheckoutPage;
