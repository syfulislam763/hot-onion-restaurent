import React from 'react';
import logo2 from '../../img/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div>
                <div className="logo-part">
                    <div className="logo-img">
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="login-area">
                        <a href="/login">Login</a>
                        <a href="/signIn">Sign In</a>
                    </div>
                </div>
                <div className="banner-part">
                    <div className="div">
                        <p>.</p>
                    </div>
                    <div className="div2">
                        <h1>Best food waiting for your belly</h1>
                        <input type="text" placeholder="search food item"/>
                        <input type="submit" value="search"/>
                    </div>
                </div>
                <nav>
                    <a href="/breakfast">Breakfast</a>
                    <a href="/lunch">Lunch</a>
                    <a href="/dinner">Dinner</a>
                </nav>
        </div>
    );
};

export default Header;