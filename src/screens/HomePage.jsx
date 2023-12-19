import React from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
import SearchBar from '../components/SearchBar'
import FoodView from '../components/FoodView'

function HomePage() {
  return (
    <div className="homePage">
        <HamburgerMenu />
        <SearchBar />
        <FoodView />

    </div>
  )
}

export default HomePage