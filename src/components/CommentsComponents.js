import React, {useEffect, useState} from 'react';

import {getServices} from "../services/AxiosService";
import CommentComponent from "./CommentComponent";
import {Outlet} from "react-router-dom";

const CommentsComponents = () => {
    const [comment,setComment] = useState([]);
    useEffect(()=>{
        getServices.getComments().then(({data})=>setComment(data))
    })
    return (
        <div>
            <h1>comments</h1>
            {comment.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
            <Outlet/>
        </div>
    );
};

export default CommentsComponents;