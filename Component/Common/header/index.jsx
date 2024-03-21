import React from 'react'
import './header.css';
import Logo from '../../../assets/Images/fav-icon-1.png';

const Header = () => {
  return (
    <>
    <div className='max-width header'>
      <img src={Logo} 
      alt="Logo" 
      className='logo' />
    

    <div className="header-right">
        <div className="header-location-search-container">
            <div className="location-wrapper">
                <div className="location-icon-name">
                <i className="fa-solid fa-location-dot absolute-center location-icon"></i>
                <div>Banglore</div>
                </div>
                <i className="fa-solid fa-caret-down absolute-center"></i>
            </div>
            <div className="location-search-seprater"></div>
            <div className="header-search-bar">
            <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
            <input type='serch' placeholder='Search for restaurant, cuisins or a dish' className='search-input' />
            </div>
        </div>
        <div className="profile-wrapper">
            <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C42A" alt="profile picture" className='header-profile-image' />
            <span className='header-username'>Tushar</span>
            <i className="fa-solid fa-angle-down absolute-center profile-options-icon"></i>
            
        </div>
    </div>
    </div>

    </>
  )
}

export default Header
