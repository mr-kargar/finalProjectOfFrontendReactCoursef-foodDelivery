import React from 'react'
import Button from '../components/Button'
import { useParams } from 'react-router-dom';
import { addItemAction } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function FoodDetailsPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
const {name}  = useParams();

function addToCartHandler(){
  dispatch(addItemAction(name));
  navigate('../cart');
}

  return (
    <div className="foodDetailsPage">
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

        <h3>{name}</h3>
      </div>
    
    <Button label={'Add to cart'} className={'primary'} onClick={addToCartHandler}/>
    </div>
  );
}

export default FoodDetailsPage