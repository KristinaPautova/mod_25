import React from "react";
import "./Check.scss";
import car5 from "../../img/car5.svg";



const Check = () => {
    return (
        <section className="check">
            <div className="check__container">
                <img src={ car5 }/>
                <h2>Попробуйте аренду на себе</h2>
                <a href="" target='_blank' target="_blank" rel="nofollow">
                    <button>Зарегистрироваться</button>
                </a>
            </div>
        </section>

    )
}

export default Check;