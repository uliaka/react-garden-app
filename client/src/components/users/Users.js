import React from 'react';
import axios from 'axios';
import './Users.css';
import usersData from './UsersData'
import { UserContext } from '../../UserProvider.js'


class User extends React.Component {
  render() {
    return (
      <div className="user_block">
        <h1>{this.props.data.name}</h1>
        <span className="age"> {this.props.data.age} years old</span>
        <span className="role">{this.props.data.role}</span>
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
      <div className="sort-button-container">
        <SortButton sortOnClick={props.sortUsersByName} title="Sort by name"/>
        <SortButton sortOnClick={props.sortUsersByAge} title="Sort by age"/>
      </div>
     {props.users.map(item => <User data={item}/>)}
    </div>
  )
}

function PagePagination(props) {
  const pages = [];
  for(let i = 1; i <= props.pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => (
        <span
          className={p === props.activePage ? 'active-page' : 'page'}
          onClick={() => {props.setActivePage(p)}}>
          {p}
        </span>
      ))}
    </div>
  )
}

const config = {
  usersPerPage: 4,
}


class UserGenery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersData,
      pagesCount: this.calculatePageCount(usersData.length, config.usersPerPage),
      activePage: 1,
    }
  }

  calculatePageCount(usersLen, usersPerPage) {
    return Math.floor(usersLen / usersPerPage) + 1;
  }

  activePageUsers(users, activePageNumber, usersPerPage) {
    const lastUserIndex = activePageNumber * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    return users.slice(firstUserIndex, lastUserIndex)
  }

  setActivePage(newActivePageNumber) {
    this.setState({
      activePage: newActivePageNumber,
    })
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
    const { activePage, pagesCount } = this.state;
    return (
      <UserContext.Consumer>
        {({ users }) => (
          <div className="user-list-container">
            <UserList
              users={this.activePageUsers(users, activePage, config.usersPerPage)}
              sortUsersByName={this.sortUsersByName.bind(this)}
              sortUsersByAge={this.sortUsersByAge.bind(this)}
            />
            <div className="padding-container">
              <PagePagination
                pagesCount={pagesCount}
                activePage={activePage}
                setActivePage={this.setActivePage.bind(this)}
              />
            </div>
         </div>
        )}
      </UserContext.Consumer>
    )
  }
}

export default UserGenery
