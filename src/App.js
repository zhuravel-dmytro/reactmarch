import React, {Component} from 'react';

import {Link, Route, Routes} from 'react-router-dom'
import AlbumsComponents from "./components/AlbumsComponents";
import TodosComponents from "./components/TodosComponents";
import CommentsComponents from "./components/CommentsComponents";
import CommentDetaile from "./components/CommentDetaile";
import AlbumsPage from "./pages/AlbumsPage";
import TodosPage from "./pages/TodosPage";
import CommentsPage from "./pages/CommentsPage";

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
                   <Route path={'/'} element={<TodosPage/>}/>
                   <Route path={'/albums'} element={<AlbumsPage/>}/>
                   <Route path={'/comments'} element={<CommentsPage/>}>
                       <Route path={':id'} element={<CommentDetaile/>} />
                   </Route>
               </Routes>
            </div>
        );
    }
}

export default App;