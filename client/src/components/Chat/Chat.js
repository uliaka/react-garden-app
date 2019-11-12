import React from 'react';
import axios from 'axios';
import './Chat.css';
import { UserContext } from '../../UserProvider.js';
import { MessageContext } from '../../MessageProvider.js';
import { MessageProvider } from '../../MessageProvider.js';
import avatarUser from '../../img/avatar-user.png';
import InputMessage from './InputMessage.js';
import MessageList from './MessageList.js';
import ChatList from './ChatList.js'



class Chat extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ users }) => (
          <MessageContext.Consumer>
            {({ messages, sendMessage }) => (
              <div className="chat-wrapper">
                <div className="chat-container">
                  <ChatList />
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
                    <MessageList messages={messages}/>
                    <InputMessage sendMessage={sendMessage}/>
                  </div>
                </div>
              </div>
            )}
          </MessageContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}

export default Chat;
