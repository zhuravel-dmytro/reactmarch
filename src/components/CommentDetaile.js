import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import {getServices} from "../services/AxiosService";

const CommentDetaile = () => {
   const {id} =  useParams();
   const [post,setPost]=useState(null);
   useEffect(()=>{
       getServices.getComments(id).then(value => setPost({...value}))
   })
    return (
        <div>
            {post && (
                <div>
                    {post.id}
                    {post.body}
                </div>

            )}
        </div>
    );
};

export default CommentDetaile;