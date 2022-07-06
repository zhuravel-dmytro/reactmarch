import React from 'react';
import {useForm} from "react-hook-form";

import {creatUser} from '../service/usersService'
import {createComments} from "../service/postService";

const CommentsForm = () => {
    let {register,handleSubmit, formState:{errors}} = useForm();


    let submit = (obj) => {
        createComments(obj).then(({data}) => console.log(data))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('comment',{required: true})}/>
                <input type="text" {...register('body',{required: true})}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default CommentsForm;