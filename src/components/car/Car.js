import React from 'react';

import css from './Car.css'
import {useDispatch} from "react-redux";
import {carsActions} from "../../redux";
const Car = ({car}) => {

    const {id,price,year,model} = car

    const dispstch = useDispatch();
    return (
        <div className='container'>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={()=>{dispstch(carsActions.setCarForUpdate(car))}}>update car</button>
            <button onClick={()=>{}}>delete car</button>
        </div>
    );
};

export default Car;