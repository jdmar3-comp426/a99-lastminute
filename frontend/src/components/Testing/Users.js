import React, { Component } from "react"

class Users extends Component {
    state = { users: [] }

    componentDidMount() {
        fetch('/app/users')
        .then(res => res.json())
        .then(users => this.setState({ users: users }))
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <p>I got this from our API</p>
                <ul>
                    {this.state.users.map(user => 
                        <li key={user.id}>{user.username}</li>    
                    )}
                </ul>
            </div>
        )
    }
}

export default Users