import React from 'react';
import {useSelector} from "react-redux";
import {carsReducer} from "../../redux";

const Cars = () => {
    const {cars} = useSelector(state => state.carsReducer);
    return (
        <div>
            <h1>автомобілі:{cars}</h1>
        </div>
    );
};

export default Cars;