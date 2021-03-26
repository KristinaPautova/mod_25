import React, {Fragment} from "react";
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom'
import '../Header/Header.scss'
import '../media.css'

const HeaderMobile = () => {
    return (
        <Fragment>
            <nav className="menu__frame is-mobile">
                <Link to='/' className="menu__frame-site"><img src={ logo } alt="Logotype"/></Link>
                <div className="mobile__burger">
                    <div className="mobile__burger-item"></div>
                    <div className="mobile__burger-item"></div>
                    <div className="mobile__burger-item"></div>
                </div>
            </nav>
        </Fragment>
    );
};

export default HeaderMobile;