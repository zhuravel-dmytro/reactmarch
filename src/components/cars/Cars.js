import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsActions, carsReducer} from "../../redux";

import Car from "../car/Car";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carsActions.getAll())
    },[])

    return (
        <div>
            <h1>автомобілі:</h1>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;