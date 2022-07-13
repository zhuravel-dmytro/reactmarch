import React from 'react';

const CommentComponent = ({ comment}) => {
    return (
        <div>
            <div><span>{comment.id}</span> name: {comment.name}</div>
            <div>email: {comment.email}</div>
        </div>
    );
};

export default CommentComponent;