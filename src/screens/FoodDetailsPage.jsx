import React, { useEffect } from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { addItemAction } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { foodDetailsFetch } from "../redux/foodDetailsSlice";
import Loader from "../components/Loader";

function FoodDetailsPage() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();

  // const foodDetails = useSelector((state) => state.food.foods.data);

  // const foodDetail = foodDetails.filter((food) => food.name === name);

  const foodDetail = useSelector((state) => state.foodDetails.foodDetail.data);
 

  function addToCartHandler() {
    dispatch(addItemAction(foodDetail[0]));
    navigate("../cart");
  }
  const data = { token: token, name: name };

  function fetchData(data) {
   
      
    };


  useEffect(() => {
    console.log(data);
    dispatch(foodDetailsFetch(data));
    console.log(foodDetail);
  }, []);

  return (
    <div className="foodDetailsPage">
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

        <h3>{name}</h3>
      </div>
      
        
        {foodDetail ?  
        <div className="foodDetailsPage-content">
          <img src="src/assets/images/Mask Group.png" alt="" srcset="" />
        <h1>{foodDetail[0].name}</h1>
        <h3>{foodDetail[0].price}</h3>
        </div>
        : 
        <div className="foodDetailsPage-content">
        <Loader className={"foodDetailsPage-content-loader"}/>
        </div>
      }
      

      <Button
        label={"Add to cart"}
        className={"primary button-bottom"}
        onClick={addToCartHandler}
      />
    </div>
  );
      }


export default FoodDetailsPage;
