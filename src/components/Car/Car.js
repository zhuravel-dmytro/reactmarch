import React from 'react';
import css from './Car.css'
const Car = ({ car, deleteCar,}) => {
    const {id, model, price, year} = car
    return (
        <div>
            <div className='wrap'>
                <div>
                    <div>id: {id}</div>
                    <div>model: {model}</div>
                    <div>price: {price}</div>
                    <div>year: {year}</div>
                </div>
                <div>
                    <button>edit</button>
                    <button onClick={()=>{deleteCar(id)}}>delete</button>
                </div>
            </div>

        </div>
    );
};

export default Car;