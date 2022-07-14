import React from 'react';

import {Link} from "react-router-dom";

const CommentComponent = ({ comment}) => {
    return (
        <div>
            <div><span>{comment.id}</span> <Link to={comment.id.toString()}>{comment.name}</Link></div>
            <div>email: {comment.email}</div>
        </div>
    );
};

export default CommentComponent;