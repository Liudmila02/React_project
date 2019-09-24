import React from 'react';

import axios from 'axios';

export default class UserList extends React.Component {
  state = {
    users: []
  }

  componentUserShow() {
    axios.get(`http://localhost:4000/`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ul>
        { this.state.users.map(user => <li>{user.email}</li>)}
      </ul>
    )
  }
}
