import React from "react";
import "./Reviews.scss";
import left from "../../img/left.svg";
import right from "../../img/right.svg";
import men from "../../img/review0.png";
import points from "../../img/points.svg"


const Reviews = () => {
    return (
        <section className="review">
            <div className="review__container">
                <h2>Отзывы клиентов</h2>
                <div className="review__container__slide">
                    <a href='' target='_blank' className="icon-arrow">
                        <img src={left}/>
                    </a>
                    <div className="review__container__slide-rect">
                        <div className="wrapper is-active">
                        <img src={ men } alt="Ivan Ivanov"/>
                        <div className="wrapper__text">
                            <span className="wrapper__text-name">Иван Иванов</span>
                            <span className="wrapper__text-city">Москва</span>
                            <span className="wrapper__text-monolog">Классный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города.</span>
                        </div>
                     </div>
                    </div>
                    <a href='' target='_blank' className="icon-arrow">
                        <img src={right}/>
                    </a>
                </div>
                <div className="review__container-circles">
                    <img src={points} alt="points"/>
                </div>
            </div>
        </section>

    )
}

export default Reviews;