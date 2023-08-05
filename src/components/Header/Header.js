import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='menu'>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/shop">Shop</a>
        </div>
    );
};

export default Header;