import React from 'react';

const UserContext = React.createContext({});

class UserProvider extends React.Component {
  state = {
    users: [
      { name: 'Vasyl', role: 'student', group: '4', age: '20'},
      { name: 'Oleg', role: 'student', group: '6', age: '21' },
      { name: 'Nadia', role: 'student', group: '1', age: '19' },
      { name: 'Petro', role: 'sofware', group: '5', age: '19'},
      { name: 'Julia', role: 'student', group: '4', age: '20'},
      { name: 'Uliana', role: 'student', group: '6', age: '21' },
      { name: 'Mysha', role: 'student', group: '1', age: '19' },
      { name: 'Katia', role: 'sofware', group: '4', age: '20'},
      { name: 'Margo', role: 'student', group: '4', age: '30'},
      { name: 'Vova', role: 'student', group: '6', age: '23' },
      { name: 'Gala', role: 'sofware', group: '1', age: '19' },
      { name: 'Hihi', role: 'student', group: '4', age: '21'},
    ]
  }

  addUser(user) {
    const { users } = this.state;
    users.push(user);
    this.setState({
      users,
    })
  }

  render(){
    const context = {
      users: this.state.users,
      addUser: this.addUser.bind(this),
    }
    return (
      <UserContext.Provider value={context}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export { UserProvider, UserContext }
