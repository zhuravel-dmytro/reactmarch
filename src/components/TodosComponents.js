import React, {useEffect, useState} from 'react';

import {baseURL, urls} from "../configs/urls";
import TodoComponent from "./TodoComponent";

const TodosComponents = () => {
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
       fetch(baseURL + urls.todos).then(value => value.json())
           .then(value => {
               setTodos([...value])
           })
    },[]);

    return (
        <div>
            <h1>todos</h1>
            {todos.map(todos=><TodoComponent key={todos.id} todos={todos}/>)}
        </div>
    );
};

export default TodosComponents;