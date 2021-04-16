import React from "react";
import calendar from '../img/calendar.svg'
import css from './Search.module.css'

const Search = () => (
    <main className={css.main}>
        <h2>Арендуйте автомобиль</h2>
        <div className={css.block}>
                <input className={css.formBlock} type="text" placeholder="Санкт-Петербург"/>
                <div className={css.formBlockDate}>
                    <img src={calendar} className={css.iconVector}/>
                    <input className={css.isMini}/>
                </div>
                <input className={css.formBlock} type="text" placeholder="Легковые"/>
                <button className={css.button}>Найти</button>
        </div>
    </main>
)

export default Search;