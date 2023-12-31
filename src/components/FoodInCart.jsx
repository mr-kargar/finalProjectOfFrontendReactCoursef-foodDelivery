import React from 'react'

function FoodInCart() {
  return (
    <div className='foodInCart'>
        <img src="src\assets\images\Mask Group.png" alt="" srcset="" className='foodInCart-image' />
        <div className="foodInCart-content">
            <h2 className='foodInCart-content-name'>Veggie tomato mix</h2>
            <p className='foodInCart-content-price'>₹ 200</p>
        </div>
        <input type="text" className='foodInCart-qty'/>

</div>
  )
}

export default FoodInCart