import React from 'react';

const TodoComponent = ({todos}) => {
    return (
        <div>
            <span>{todos.id}</span>
            <span>{todos.title}</span>
        </div>
    );
};

export default TodoComponent;