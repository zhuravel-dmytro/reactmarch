import React from 'react';
import {useForm} from "react-hook-form";

import {creatUser} from '../service/usersService'

const UserForm = () => {
    let {register,handleSubmit, formState:{errors}} = useForm();


    let submit = (obj) => {
        creatUser(obj).then(result => console.log(result))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('firstName',{required: true})}/>
                <input type="text" {...register('lastName',{required: true})}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default UserForm;