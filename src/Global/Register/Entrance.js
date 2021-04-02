import React, {Fragment} from "react";
import './Entrance.scss'
import close from '../../img/close.svg'
import login from '../../img/Login.svg'
import {Link} from "react-router-dom";

const Entrance = () => {
    return (
        <Fragment>
            <div className="entrance">
                <div className="entrance__container">
                    <Link to="/" className="entrance__container_close" alt="logo" rel="nofollow"><img src={close} alt="close"/></Link>
                <div className="entrance__container_wrapper">
                    <img src={login} alt="men and table"/>
                    <h3>Авторизация</h3>
                    <div className="entrance__container_wrapper_block">
                        <input className="entrance__container_wrapper_block-input-one" type="text"  text="Электронная почта" placeholder="Электронная почта"/>
                        <input className="entrance__container_wrapper-_block_input-two" type="text"  text="Пароль" placeholder="Пароль"/>
                    </div>
                        <button className="entrance__container_wrapper-button">Войти</button>
                        <hr/>
                        <Link to="/register" className="entrance__container_wrapper-link is-animated"  rel="nofollow">Зарегистрироваться</Link>
                </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Entrance;