import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import {getServices} from "../services/axiosService";

import css from './CommentDetailsStyle.css'
const CommentDetaile = () => {
   const {id} =  useParams();

   const [post,setPost]=useState(null);

   useEffect(()=>{
       getServices.getPostById(id).then(value => setPost({...value.data}))
   },[id])

    return (
        <div>
            {post && (
                <div className='container'>
                    <h3>DETAILS</h3>
                    {post.id}
                    {post.body}
                </div>

            )}
        </div>
    );
};

export default CommentDetaile;