import React from 'react'
import FoodView from '../components/FoodView'

function SearchPageWithItems() {
  return (
    <div className="searchPageWithItems">
        <div className="searchPageWithItems_header">
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

        <h3>Spicy chickens</h3>
      </div>

        <div className="searchPageWithItems_content">
<h1>Found 6 result</h1>
<div className='searchPageWithItems_content_result'>
    <FoodView />
    <FoodView />
    <FoodView />
    <FoodView />
</div>
        </div>
    </div>
  )
}

export default SearchPageWithItems