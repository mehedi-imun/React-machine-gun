import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
            <div > <h3 className='nav-logo'> Meal-DB</h3></div>
            <div className='nav-items-container'>
                <div className='nav-items'>
                <a href="/home">Home</a>
                <a href="/Food">Food</a>
                <a href="/Cart">Cart</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;