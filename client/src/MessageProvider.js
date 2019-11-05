import React from 'react';

const MessageContext = React.createContext({});

class MessageProvider extends React.Component {
  state = {
    messages: [
      { member: "partner", text: 'Hi! How are you?', timestamp: '11:30'},
      { member: "user", text: 'Hi! Fine', timestamp: '11:56' },
    ],
  }

  sendMessage(message) {
    const { messages } = this.state;
    messages.push({
      member: "user",
      text: message,
      timestamp: "12:30"
    })
    this.setState({ messages, });
  }

  render(){
    const context = {
      messages: this.state.messages,
      sendMessage: this.sendMessage.bind(this),
    }
    return (
      <MessageContext.Provider value={context}>
        {this.props.children}
      </MessageContext.Provider>
    )
  }
}

export { MessageProvider, MessageContext }
