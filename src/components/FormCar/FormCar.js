import React from 'react';
import {useForm} from "react-hook-form";

const FormCar = () => {
    const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm();

    return (
        <div>
            <form action="">
                <input type="text" />
            </form>
        </div>
    );
};

export default FormCar;