import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/header-logo.png";
import SearchIcon from "../images/icons/searchIcon.png";
import SopingCart from "../images/icons/shopping-cart.png";
import "./Header.css";
import { useAuth } from '../context/GlobalState';

const Header = () => {
  const { basket } = useAuth();
  return (
    <div className='header'>
      {/*Icon amazon*/}
      <Link to="/">
        <img src={Logo} className='header-logo' />
      </Link>
      {/*Search*/}
      <div className='header-search'>
        <input type='text' className='header-searchInput' />
        <img className='header-searchIcon' src={SearchIcon} />
      </div>
      {/*data myself*/}
      <div className='header-nav'>
        {/*data myself Helo.....*/}
        <Link to="/login">
          <div className='header-option'>
            <div className='header-optionLineOne'>Hello {localStorage.getItem("email") ? localStorage.getItem("email") : "No User"}</div>
            <div className='header-optionLineTow'>{localStorage.getItem("email") ? "Sign Out" : "Sign In"}</div>
          </div>
        </Link>
        {/*data order*/}
        <Link to="/orders">
          <div className='header-option'>
            <div className='header-optionLineOne'>Returns</div>
            <div className='header-optionLineTow'>&Orders</div>
          </div>
        </Link>
        {/*Your Prime*/}
        <div className='header-option'>
          <div className='header-optionLineOne'>Your</div>
          <div className='header-optionLineTow'>Prime</div>
        </div>
        {/*shoping cart*/}
        <Link to="/checkout">
          <div className='header-optionBasket'>
            <img src={SopingCart} className='' />
            <span className='header-optionLineTwo header-basketCount'>{basket.length > 0 ? basket.length : 0}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
