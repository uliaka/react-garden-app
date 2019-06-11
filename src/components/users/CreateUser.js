import React from 'react';
import { UserContext } from '../../UserProvider.js'

class CreateUser extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({users, addUser}) => (
          users.map(user => user.name)
        )}
      </UserContext.Consumer>
    )
  }
}

export default CreateUser
