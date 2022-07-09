import React, {useEffect, useState} from 'react';

import {carService} from "../../service/CarService";
import {set} from "react-hook-form";
import Car from "../Car/Car";
import css from './Cars.css'
import FormCar from "../FormCar/FormCar";

const Cars = () => {
    const [cars,setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(({data}) => setCars(data))
    },[])

    const addCar = (car) =>{
        setCars(...cars, car)
    }

    return (
        <div>
            <FormCar addCar={addCar}/>
            <div className='container'>
                {cars.map(car => <Car key={car.id} car={car}/>)}
             </div>
        </div>

    );
};

export default Cars;