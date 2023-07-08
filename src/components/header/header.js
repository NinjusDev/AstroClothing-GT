import React from 'react';
import './header.css';
import logoAstro from './logo2.png';
import shoppingCartIcon from './shopping-cart.png';

function Header() {
    return (
        <header className='logo'>
            <div className='clk-logo'>
                <a href='/'><img src={logoAstro} alt=''></img></a>
            </div>

            <nav className='navigation'>
                <ul>
                    <a href='/'>Home</a>
                    <a href='/products'>Products</a>
                    <a href='/contact'>Contact</a>
                    <a href='/login'>Login</a>
                    <a href='/cart'><img src={shoppingCartIcon} alt='Shopping Cart' /></a>
                </ul>
            </nav>
        </header>
    )
}

export default Header