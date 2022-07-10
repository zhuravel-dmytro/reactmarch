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
        setCars([...cars,car])
    }

    const deleteCar = async (id) => {
        await carService.deleteById(id)
        const res = [...cars]
        const index = res.findIndex(value => value.id == id);
        if (index !== -1){
            res.splice(index,1)
            setCars(res)
        }
    }

    return (
        <div>
            <FormCar addCar={addCar}/>
            <div className='container'>
                {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar}/>)}
             </div>
        </div>

    );
};

export default Cars;