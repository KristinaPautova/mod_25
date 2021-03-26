import React, {Fragment} from "react";
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom'
import './Header.scss'
import '../media.css'
import HeaderMobile from "../HeaderMobile/HeaderMobile";

const Header = () => {
    return (
        <Fragment>
            <header>
                <nav className="menu__frame is-desktop">
                    <Link to="/" className="menu__frame-site" alt="logo" rel="nofollow"><img src={logo} alt="Logotype"/></Link>
                    <Link to="/about" className="menu__frame-link is-animated is-active"  rel="nofollow">О нас</Link>
                    <Link to="/" className="menu__frame-link is-animated"  rel="nofollow">Условия</Link>
                    <Link to="/ouestions" className="menu__frame-link is-animated" rel="nofollow">Частые вопросы</Link>
                    <button className="menu__frame-button is-animated">Войти</button>
                </nav>
                <HeaderMobile />
            </header>
        </Fragment>
    );
};

export default Header;