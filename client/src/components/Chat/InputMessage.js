import React from 'react';
import './Chat.css';
import avatarUser from '../../img/avatar-user.png';


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

export default InputMessage
