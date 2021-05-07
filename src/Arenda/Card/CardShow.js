import React, { Fragment } from 'react';

const createCar = (props) => (
    <Fragment>
    <div className="card-block">
        <div className='card-block-img'>
               <img src={props.car.img} alt='Car'/>
        </div>
        <div className="card-block-person">
        <img src = {props.car.person} alt="person"/>
        </div>
        <div className="card-block-price">
               <h4>{props.car.name}</h4>
               <p>{props.car.price}</p>
        </div>
    </div>
    </Fragment>
)

export default createCar;