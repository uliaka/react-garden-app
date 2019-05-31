import React from 'react';
import axios from 'axios';

class User extends React.Component {
  render() {
    return <div> {this.props.data.name} </div>
  }
}

function UserList(props) {
  return (
    <div>
      <h1> Users list </h1>
     {props.users.map(item => <User data={item}/>)}
    </div>
  )
}

class UserGenery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ name: 'Vasyl', role: 'student', group: '4', age: '20'},
        { name: 'Oleg', role: 'student', group: '6', age: '21' },
        { name: 'Nadia', role: 'student', group: '1', age: '19' }]
    }
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}

export default UserGenery
