import React, {Component} from 'react';
import Users from "./components/Users";
import Posts from "./components/Posts";

class App extends Component {
    render() {
        return (
            <div>
                <Users/>
                <hr/>
                <Posts/>
            </div>
        );
    }
}

export default App;