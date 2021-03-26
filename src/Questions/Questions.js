import React, {Fragment} from "react";
import Header from "../Global/Header/Header";
import Footer from "../Global/Footer/Footer";
import './Questions.scss'
import question from "./img/question.svg";
import down from "./img/down.svg"
import top from "./img/top.svg"


const Questions = () => (
    <Fragment>
        <Header />
        <main>
            <section className="question__frame">
                <div className="content__container">
                    <img src={ question } alt="girl with a question"/>
                    <h1>Частые вопросы</h1>
                    <div className="question__frame-text">
                        <p>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
                    </div>
                </div>
            </section>
            <section className="asked_questions__frame">
                <div className="team__frame-wrapper">
                    <div className="team__frame-wrapper-item is-animated">
                        <button type="button" className="collapsible">Могу ли я отменить бронь?
                            <a href='' target='_blank' className="link">
                                <img src={down}/>
                            </a>
                        </button>
                    </div>
                    <div className="team__frame-wrapper-item is-animated">
                        <button type="button" className="collapsible">Могу ли я вернуть деньги, если не подошёл
                            автомобиль?
                            <a href='' target='_blank' className="link">
                                <img src={down}/>
                            </a>
                        </button>
                    </div>
                    <div className="team__frame-wrapper-item is-animated">
                        <button type="button" className="collapsible">Что делать, если случилось ДТП?
                            <a href='' target='_blank' className="link">
                                <img src={down}/>
                            </a>
                        </button>
                    </div>
                    <div className="team__frame-wrapper-item is-animated is-active">
                        <button type="button" className="collapsible">Могу ли я оставить автомобиль в удобном для меня
                            месте?
                            <a href='' target='_blank' className="link">
                                <img src={ top }/>
                            </a>
                        </button>
                    </div>
                    <div className="team__frame-wrapper-item-answer ">
                        <p>Данный вопрос обсуждается с собственником,
                            но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
                    </div>
                    <div className="team__frame-wrapper-item is-animated">
                        <button type="button" className="collapsible">Что делать, если собственник просит заплатить ему
                            напрямую?
                            <a href='' target='_blank' className="link">
                                <img src={ down }/>
                            </a>
                        </button>
                    </div>
                    <div className="team__frame-wrapper-item is-animated">
                        <button type="button" className="collapsible">Должен ли я заправлять автомобиль?
                            <a href='' target='_blank' className="link">
                                <img src={ down }/>
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </Fragment>
)

export default Questions;