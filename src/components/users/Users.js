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
      <button onClick={props.sortOnClick}>{props.title}</button>
  )
}

function UserList(props) {
  return (
    <div>
      <h1> Users list </h1>
      <SortButton sortOnClick={props.sortUsersByName} title="Sort by name"/>
      <SortButton sortOnClick={props.sortUsersByAge} title="Sort by age"/>
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

  sortUsersByName() {
    const users = this.state.users;
    const sortedUsers = users.sort((a, b) => a.name > b.name ? 1 : -1)
    this.setState({ users: sortedUsers })
  }

  sortUsersByAge() {
    const users = this.state.users;
    const sortedUsers = users.sort((a, b) => a.age > b.age ? 1 : -1)
    this.setState({ users: sortedUsers })
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} sortUsersByName={this.sortUsersByName.bind(this)} sortUsersByAge={this.sortUsersByAge.bind(this)}/>
      </div>
    )
  }
}

export default UserGenery
