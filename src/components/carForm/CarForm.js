import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../redux";

const CarForm = () => {

    const {register,reset,handleSubmit, setValue} = useForm();
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(()=>{
        if (carForUpdate){
            setValue( 'model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate])

    const submit = async (data) => {
        await dispatch(carsActions.updateById({id: carForUpdate.id, car: data}))
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button onClick={()=>{}}>Update</button>
            </form>

        </div>
    );
};

export default CarForm;