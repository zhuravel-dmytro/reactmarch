import React from 'react';

import css from './Car.css'
const Car = ({car}) => {
    const {id,price,year,model} = car
    return (
        <div className='container'>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
        </div>
    );
};

export default Car;