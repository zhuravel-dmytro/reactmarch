import React, {Component} from 'react';

import {Route, Routes} from 'react-router-dom'
import CommentDetaile from "./components/CommentDetaile";
import AlbumsPage from "./pages/AlbumsPage";
import TodosPage from "./pages/TodosPage";
import CommentsPage from "./pages/CommentsPage";
import MenuComponent from "./components/MenuComponent";

class App extends Component {
    render() {
        return (
            <div>
              <MenuComponent/>
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