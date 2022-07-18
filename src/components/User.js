import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id,name,username} = this.props.user;
        return (
            <div>
                {id} -- {name} -- {username}
            </div>
        );
    }
}

export default User;