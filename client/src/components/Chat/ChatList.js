import React from 'react';
import './Chat.css';
import { UserContext } from '../../UserProvider.js';
import avatarUser from '../../img/avatar-user.png';

class ChatList extends React.Component {
    state = {
      activeUser: 2,
      searchUser: "",
    }

  handleSearchCahnge(value) {
    this.setState({
      searchUser: value,
    })
  }

  setActiveUser(userIndex) {
    this.setState({
      activeUser: userIndex,
    });
  }

  filterList(users) {
    const { searchUser } = this.state;
    return users.filter(function(user) {
      return user.name.toLowerCase().search(
        searchUser.toLowerCase()) !== -1;
    });
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ users }) => (
          <div className="chat-list">
            <div className="chat-list-title">
              <div className="avatar-user-container">
                <img className="avatar-user"
                  src={avatarUser}
                />
                <div className="user-info">
                  <span className="user-name">Uliana</span>
                  <span className="user-status">Online</span>
                </div>
              </div>
            </div>
            <div className="separator">
              <input
                type="text"
                className="filter"
                placeholder="CHAT"
                onChange={(e) => {this.handleSearchCahnge(e.target.value)}}
               />
            </div>
            <div className="chat-list-container">
              {this.filterList(users).map((user, index) => (
                <div
                  className={"user-block user" + (index === this.state.activeUser ? ' active-user' : '') }
                  onClick={() => this.setActiveUser(index)}
                >
                  <img className="avatar-user"
                    src={avatarUser}
                  />
                  <div className="users-chatting">
                    <div className="user-name">{user.name}</div>
                    <div className="user-messages">Hello! How are you?</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       )}
      </UserContext.Consumer>
    )
  }
}

export default ChatList
