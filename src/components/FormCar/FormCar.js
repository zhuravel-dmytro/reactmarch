import React from 'react';

import {useForm} from "react-hook-form";

import css from './FormCar.css'

const FormCar = () => {
    const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm();

    function submit() {

    }

    return (
        <div className={'formContainer'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model',{})}/>
                <input type="number" placeholder={'price'} {...register('price',{})}/>
                <input type="number" placeholder={'year'} {...register('year',{})}/>
                <button>done</button>
            </form>
        </div>
    );
};

export default FormCar;