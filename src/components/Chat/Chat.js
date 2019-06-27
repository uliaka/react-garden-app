import React from 'react';
import axios from 'axios';
import './Chat.css';
import { UserContext } from '../../UserProvider.js'
import avatarUser from '../../img/avatar-user.png'
import set from '../../img/set.jpg'


class Chat extends React.Component {
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
          <div className="chat-wrapper">
            <div className="chat-container">
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
              <div className="messages-container">
                <div className="message-title">
                  <div className="partner-container">
                    <img className="avatar-user"
                      src={avatarUser}
                    />
                    <div className="partner-info">
                      <span className="partner-name">Michailo</span>
                      <span className="partner-status">Online</span>
                    </div>
                  </div>
                  <div className="setting-messages">
                    <img className="setting-img"/>
                  </div>
                </div>
                <div className="messages-place">
                  <div className="conversation-block">
                    <div className="partner-message-block">
                      <img className="avatar-user"
                        src={avatarUser}
                      />
                      <div className="partner-message">Hello! How are you?</div>
                      <div className="partner-time-block">11:02</div>
                    </div>
                    <div className="user-message-block">
                      <img className="avatar-user"
                        src={avatarUser}
                      />
                     <div className="user-message">Hello! Fine.</div>
                     <div className="user-time-block">11:12</div>
                    </div>
                  </div>
                </div>
                  <div className="writing-place">
                    <input
                      type="text"
                      className="message"
                      placeholder="Type something..."
                     />
                  </div>
              </div>
            </div>
          </div>
        )}
      </UserContext.Consumer>
    )
  }
}

export default Chat;
