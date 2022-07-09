import React from 'react';

import {useForm} from "react-hook-form";

import css from './FormCar.css'

const FormCar = () => {
    const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm({mode:'all'});

    const submit = async (data) => {
        console.log(data)
    }

    return (
        <div className={'formContainer'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model',{
                    required: true,
                    // pattern: new RegExp(/^[a-zA-ZА-яіІїЇєЄґыЫ](1,20)$/)
                })}/>
                <input type="number" placeholder={'price'} {...register('price',{
                    required: true,
                    valueAsNumber: true,
                    min:0,
                    max:1000000
                })}/>
                <input type="number" placeholder={'year'} {...register('year',{
                    required: true,
                    valueAsNumber: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button>done</button>
            </form>
            <div>
                {errors.model && <span>min 1 max 20 ch</span>}
                {errors.price && <span>min 0 max 1000 000 </span>}
                {errors.year && <span>min 1990 max today</span>}
            </div>
        </div>
    );
};

export default FormCar;