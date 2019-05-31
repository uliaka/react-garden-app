import React from 'react';
import axios from 'axios';
import './Users.css';
import usersData from'./UsersData'

class User extends React.Component {
  render() {
    return (
      <div>
          <div class="user_block">
            <h1>{this.props.data.name}</h1>
            <span class="age"> {this.props.data.age} years old</span>
            <span class="role">{this.props.data.role}</span>
         </div>
      </div>
    )
  }
}

function SortButton(props) {
  return (
    <button onClick={props.sortUsers}>Sort by name</button>
  )
}

function UserList(props) {
  return (
    <div>
      <h1> Users list </h1>
      <SortButton sortUsers={props.sortUsers}/>
     {props.users.map(item => <User data={item}/>)}
    </div>
  )
}

class UserGenery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersData,
    }
  }

  sortUsers() {
    const users = this.state.users;
    const sortedUsers = users.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    this.setState({ users: sortedUsers })
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} sortUsers={this.sortUsers.bind(this)}/>
      </div>
    )
  }
}

export default UserGenery
