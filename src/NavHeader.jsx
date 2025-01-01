import React from 'react'

function NavHeader() {
  
  return (
    <div className='header'>
      <img className='logo' src="src\images\P X (20).png" alt="logo"/>
      <div className='hamburger-section'>
        <a href='#home-section'>Home</a>
        <a href='#teams-section'>Teams</a>
        <a href='#about-section'>About</a>
        <a href='#footer-section'>Contact</a>
      </div>
      
    </div>
  )
}

export default NavHeader