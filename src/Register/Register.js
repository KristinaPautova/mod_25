import React, { Fragment } from 'react';
import Header from '../Global/Header/Header';
import "./Register.scss"

const RegistrAbout = () => {


    return (
        <Fragment>
            <Header />
            <section className="registration">
                <div className="registration__container">
                    <div className="registration__container-step">Шаг 1 из 3</div>
                    <h1>Расскажите о себе</h1>
                    <form>
                        <fieldset>
                            <legend>Информация о вас</legend>
                            <div className="form-block">
                                <label for>ФИО</label>
                                <input placeholder="ФИО полностью"></input>
                            </div>
                            <div className="form-block">
                                <label for>Дата рождения</label>
                                <div className="form-block-date">
                                    <div className="icon-Vector"></div>
                                    <input className="is-mini"></input>
                                </div>

                            </div>
                            <div className="form-block">
                                <label for>Электронная почта</label>
                                <input placeholder="mail@example.com"></input>
                            </div>
                            <div className="form-block">
                                <label for>Телефон</label>
                                <input className="is-mini" placeholder="+7 900 000-00-00"></input>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Паспорт</legend>
                            <div className="form-block">
                                <label for>Серия и номер</label>
                                <input placeholder="0000 000000"></input>
                            </div>
                            <div className="form-block">
                                <label for>Дата выдачи</label>
                                <div className="form-block-date">
                                    <div className="icon-Vector"></div>
                                    <input className="is-mini"></input>
                                </div>
                            </div>
                            <div className="form-block">
                                <label for>Кем выдан</label>
                                <input placeholder="Название органа выдавшего паспорт"></input>
                            </div>
                            <div className="form-block">
                                <label for>Код подразделения</label>
                                <input className="is-mini" placeholder="000-000"></input>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Водительское удостоверение</legend>
                            <div className="form-block">
                                <label for>Серия и номер</label>
                                <input className="is-mini" placeholder="0000 000000"></input>
                            </div>
                            <div className="form-block">
                                <label for>Дата выдачи</label>
                                <div className="form-block-date">
                                    <div className="icon-Vector"></div>
                                    <input placeholder="00.00.0000" className="is-mini"></input>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    <div className="registration__container-rect"></div>
                    <button className="is-disable">Продолжить</button>
                </div>
            </section>
        </Fragment>
    )
}

export default RegistrAbout;