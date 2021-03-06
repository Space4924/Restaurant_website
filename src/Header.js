import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from "./Stateprovider";


function Header() {
    const[{basket},dispatch]=useStateValue();
    return (
        <div className='header'>
            <Link to="/">
            <img className='header__logo' src="/pics/logo1.jpg"/>
            </Link>
            <div className='header__search'> 
                <input className='header__searchInput' type="text"/>
                <SearchIcon className="header__searchIcon"/>           
            </div>
            <div className='header__nav'>
                <Link to='/login'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                </div>
                </Link>
                <Link to='/Call'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Call
                    </span>
                    <span className='header__optionLineTwo'>
                        Waiter
                    </span>
                </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className='header__optionBasket'>
                    <Link to="/checkout" >
                    <ShoppingBasketIcon className='basket'/>
                    </Link>
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
            </div>
        </div>

    )
}

export default Header
