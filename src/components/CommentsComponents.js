import React, {useEffect, useState} from 'react';

import {getServices} from "../services/AxiosService";
import CommentComponent from "./CommentComponent";

const CommentsComponents = () => {
    const [comment,setComment] = useState([]);
    useEffect(()=>{
        getServices.getComments().then(({data})=>setComment(data))
    })
    return (
        <div>
            <h1>comments</h1>
            {comment.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponents;