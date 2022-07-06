import React, {Component} from 'react';
import UserForm from "./components/UserForm";
import CommentsForm from "./components/CommentsForm";

class App extends Component {
    render() {
        return (
            <div>
                <UserForm/>
                <CommentsForm/>
            </div>
        );
    }
}

export default App;