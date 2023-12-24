import React from 'react'

function HamburgerMenu(props) {
 
  return (
   <div className="hamburgerMenu " onClick={props.showMenu}>
        <div className="hamburgerMenu__line1"></div>
        <div className="hamburgerMenu__line2"></div>
        <div className="hamburgerMenu__line1"></div>
   </div>
  )
}

export default HamburgerMenu