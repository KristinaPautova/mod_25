import React, {Fragment} from "react";
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';
import Person from '../img/Person.svg';
import './Header.scss';
import '../../Global/media.css';
import HeaderMobile from "../../Global/HeaderMobile/HeaderMobile";

const Header = () => {
    return (
        <Fragment>
            <header>
                <nav className="menu__frame is-desktop">
                    <Link to="/lease" className="menu__frame-site"  rel="nofollow"><img src={logo} alt="Logotype"/></Link>
                    <Link to="/lease" className="menu__frame-link is-animated is-active"  rel="nofollow">Бронирования</Link>
                    <Link to="/lease" className="menu__frame-link is-animated"  rel="nofollow">Мои автомобили</Link>
                    <Link to="/lease" className="menu__frame-link is-animated" rel="nofollow">Сообщения</Link>
                    <Link to="/lease" className="menu__frame-person is-animated" rel="nofollow"><img src={Person} alt="Logotype"/></Link>
                </nav>
                <HeaderMobile />
            </header>
        </Fragment>
    );
};

export default Header;


