import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from 'react-router-dom';

let defaultValue = {name: 'dimas', age: 26}
export let MyContext = createContext(defaultValue);
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MyContext.Provider value={defaultValue }>
                <App />
            </MyContext.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

