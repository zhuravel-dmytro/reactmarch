import React, {Component} from 'react';

import {Link} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={'/'}>todos</Link></li>
                    <li><Link to={'/albums'}>albums</Link></li>
                    <li><Link to={'/comments'}>comments</Link></li>
                </ul>
            </div>
        );
    }
}

export default App;