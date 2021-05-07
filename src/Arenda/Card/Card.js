import React, {Fragment} from "react";
import './Card.scss';
import '../../Global/media.css';
import { cars } from './Vanilla.js';
import CreateCar from './CardShow';

const Card = () => {
    return (
        <Fragment>
            <div className="card">
            <h3>Рекомендуем поблизости</h3>
            {cars.map(car => {
                return (
                    <CreateCar car={car} key={car.name + Math.random()} />
                )
            })}
            </div>
        </Fragment>
    );
};

export default Card;