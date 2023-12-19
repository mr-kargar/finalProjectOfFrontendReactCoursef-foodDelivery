import React from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
import SearchBar from '../components/SearchBar'

function HomePage() {
  return (
    <div className="homePage">
        <HamburgerMenu />
        <SearchBar />

    </div>
  )
}

export default HomePage