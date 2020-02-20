import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'  //special syntax for importing svg in react 
import './header.styles.scss';

function Header () {
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>OPTION</Link>
                <Link to='/signin' className='option'>SIGN-IN</Link>
            </div>
        </div>
    )
}

export default Header;