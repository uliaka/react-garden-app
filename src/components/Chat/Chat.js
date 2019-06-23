import React from 'react';
import axios from 'axios';
import './Chat.css';
import { UserContext } from '../../UserProvider.js'
import avatarUser from '../../img/avatar-user.png'


class Chat extends React.Component {
  render() {
    return (
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
              Chat
            </div>
            <div className="chat-list-body">
            </div>
          </div>
          <div className="messages-container">
          </div>
        </div>
      </div>
    )
  }
}

export default Chat;
