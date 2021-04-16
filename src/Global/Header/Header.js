import React, {Fragment, useState} from "react";
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom'
import './Header.scss'
import '../media.css'
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import Entrance from "../Register/Entrance";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <Fragment>
            <header>
                <nav className="menu__frame is-desktop">
                    <Link to="/" className="menu__frame-site" alt="logo" rel="nofollow"><img src={logo} alt="Logotype"/></Link>
                    <Link to="/about" className="menu__frame-link is-animated is-active"  rel="nofollow">О нас</Link>
                    <Link to="/lease" className="menu__frame-link is-animated"  rel="nofollow">Условия</Link>
                    <Link to="/qouestions" className="menu__frame-link is-animated" rel="nofollow">Частые вопросы</Link>
                    <button  className="menu__frame-button is-animated" target="_blank" rel="nofollow" onClick={() => setIsVisible(true)}>Войти</button>
                </nav>

                <HeaderMobile />
            </header>
            {isVisible && <Entrance />}
        </Fragment>
    );
};

export default Header;