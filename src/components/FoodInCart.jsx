import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeItemQuantityAction } from "../redux/cartSlice";

function FoodInCart(props) {
  const [quantity, setQuantity] = useState(props.item.quantity);
  

const dispatch = useDispatch();


  useEffect(() => {
    dispatch(changeItemQuantityAction({id: props.item._id, quantity: quantity}));
  }, [quantity]);

  return (
    <div className="foodInCart">
      <img
        src="src\assets\images\Mask Group.png"
        alt=""
        srcset=""
        className="foodInCart-image"
      />
      <div className="foodInCart-content">
        <h2 className="foodInCart-content-name">{props.item.name}</h2>
        <p className="foodInCart-content-price">{props.item.price}</p>
      </div>
      <div className="foodInCart-quantity">
      <label htmlFor="quantity"> qty : </label>
      <input
        name="quantity"
        type="text"
        className="foodInCart-quantity-qty"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      </div>
    </div>
  );
}

export default FoodInCart;
