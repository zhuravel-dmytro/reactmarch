import React from 'react';
import css from './Car.css'
const Car = ({ car}) => {
    return (
        <div>
            <div className='wrap'>
                <div>
                    <div>id: {car.id}</div>
                    <div>model: {car.model}</div>
                    <div>price: {car.price}</div>
                    <div>year: {car.year}</div>
                </div>
                <div>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>

        </div>
    );
};

export default Car;