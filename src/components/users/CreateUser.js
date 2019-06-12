import React from 'react';
import { UserContext } from '../../UserProvider.js'
import { UserProvider } from '../../UserProvider'

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        role: '',
        group: '',
        age: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop, value) {
    const { newUser } = this.state;
    newUser[prop] = value;
    this.setState({ newUser });
  }

  resetForm() {
    this.setState({
      newUser: {
        name: '',
        role: '',
        group: '',
        age: ''
      }
    })
  }

  render() {
    return (
      <UserContext.Consumer>
        {({users, addUser}) => (
          <div>
            <label>
              Username
              <input type="text"
                name="name"
                value={this.state.newUser.name}
                onChange={(e) => {this.handleChange('name', e.target.value)}}
              />
            </label>
            <label>
              Role
              <input type="text"
                name="role"
                value={this.state.newUser.role}
                onChange={(e) => {this.handleChange('role', e.target.value)}}
              />
            </label>
            <label>
              Group
              <input type="text"
                name="group"
                value={this.state.newUser.group}
                onChange={(e) => {this.handleChange('group', e.target.value)}}
              />
            </label>
            <label>
              Age
              <input type="text"
                name="age"
                value={this.state.newUser.age}
                onChange={(e) => {this.handleChange('age', e.target.value)}}
              />
            </label>
            <button
              onClick={() => {
                addUser(this.state.newUser)
                this.resetForm()
              }}
            >
              Add user
            </button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}


export default CreateUser
