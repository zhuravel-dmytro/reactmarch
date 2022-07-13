import React, {Component} from 'react';

import {Link, Route, Routes} from 'react-router-dom'
import AlbumsComponents from "./components/AlbumsComponents";
import TodosComponents from "./components/TodosComponents";
import CommentsComponents from "./components/CommentsComponents";

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={'/'}>todos</Link></li>
                    <li><Link to={'/albums'}>albums</Link></li>
                    <li><Link to={'/comments'}>comments</Link></li>
                </ul>

               <Routes>
                   <Route path={'/'} element={<TodosComponents/>}/>
                   <Route path={'/albums'} element={<AlbumsComponents/>}/>
                   <Route path={'/comments'} element={<CommentsComponents/>}/>
               </Routes>
            </div>
        );
    }
}

export default App;