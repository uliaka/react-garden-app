import React from 'react';
import axios from 'axios';
import './Chat.css';
import { UserContext } from '../../UserProvider.js'
import { MessageContext } from '../../MessageProvider.js'
import { MessageProvider } from '../../MessageProvider.js'
import avatarUser from '../../img/avatar-user.png'



class InputMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }

    this.onChangeMessage = this.onChangeMessage.bind(this)
    this.onSubmitMessage = this.onSubmitMessage.bind(this)
    this.onPressEnter = this.onPressEnter.bind(this)
  }

  onChangeMessage(e) {
    this.setState({ text: e.target.value });
  }

  onPressEnter(e) {
    if (e.keyCode === 13) {
      this.props.sendMessage(this.state.text);
      this.resetMessage();
    }
  }

  onSubmitMessage(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.text);
    this.resetMessage();
  }

  resetMessage() {
      this.setState({ text: "" })
  }

  render() {
    return (
      <div className="wrapper-writing-place">
        <div className="writing-place">
          <input
            type="text"
            className="message"
            placeholder="Type something..."
            value={this.state.text}
            onChange={(e) => this.onChangeMessage(e)}
            onKeyDown={(e) => this.onPressEnter(e)}
           />
           <button
             className="send-message"
             onClick={(e) => this.onSubmitMessage(e)}
             >Send
           </button>
        </div>
     </div>
    )
  }
}

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: 2,
      searchUser: "",
    }
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
          <MessageContext.Consumer>
            {({ messages, sendMessage }) => (
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
