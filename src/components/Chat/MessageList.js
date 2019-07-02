import React from 'react';
import './Chat.css';
import avatarUser from '../../img/avatar-user.png';

class MessageList extends React.Component {
  render() {
    const { messages } = this.props
    return (
      <div className="messages-place">
       {messages.map((message) => (
        <div className="conversation-block">
          <div className={(message.member === "partner" ? "partner" : "user") + "-message-block"}>
            <img className="avatar-user"
              src={avatarUser}
            />
            <div className={(message.member === "partner" ? "partner" : "user") + "-message"}>{message.text}</div>
            <div className={(message.member === "partner" ? "partner" : "user") + "-time-block"}>{message.timestamp}</div>
          </div>
        </div>
        ))}
      </div>
    )
  }
}

export default MessageList
