import React from 'react';
import { UserContext } from '../../UserProvider.js'
import { UserProvider } from '../../UserProvider'
import './Users.css';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        role: '',
        group: '',
        age: ''
      },
      nameErorr: '',
      roleErorr: '',
      groupErorr: '',
      ageErorr: '',
      err: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop, value) {
    const { newUser } = this.state;
    newUser[prop] = value;
    this.setState({ newUser });
  }

  validate(users) {
  const { name, role, group, age } = this.state.newUser;
   let nameErorr = name ? '' : 'name is empty';
   let roleErorr = role ? '' : 'role is empty';
   let groupErorr = group ? '' : 'group is empty';
   let ageErorr = age ? '' : 'age is empty';
   let err = '';
   const valUser = users.find(user => name === user.name)
   if (valUser) {
     err = 'user exist!!'
   }

   if (nameErorr || roleErorr || groupErorr || ageErorr || err) {
     this.setState({ nameErorr, roleErorr, groupErorr, ageErorr, err })
     return false;
   }
   return true;
  }

  resetForm() {
    this.setState({
      newUser: {
        name: '',
        role: '',
        group: '',
        age: ''
      },
      nameErorr: '',
      roleErorr: '',
      groupErorr: '',
      ageErorr: '',
      err: ''
    })
  }

  render() {
    return (
      <UserContext.Consumer>
        {({users, addUser}) => (
          <div className="form-create-user">
            <h2>Add user</h2>
              <label>
                Username
                <input type="text"
                  name="name"
                  value={this.state.newUser.name}
                  onChange={(e) => {this.handleChange('name', e.target.value)}}
                />
                <div className = "style-error">{this.state.nameErorr}</div>
              </label>
              <label>
                Role
                <input type="text"
                  name="role"
                  value={this.state.newUser.role}
                  onChange={(e) => {this.handleChange('role', e.target.value)}}
                />
                <div className="style-error">{this.state.roleErorr}</div>
              </label>
              <label>
                Group
                <input type="text"
                  name="group"
                  value={this.state.newUser.group}
                  onChange={(e) => {this.handleChange('group', e.target.value)}}
                />
                <div className="style-error">{this.state.groupErorr}</div>
              </label>
              <label>
                Age
                <input type="text"
                  name="age"
                  value={this.state.newUser.age}
                  onChange={(e) => {this.handleChange('age', e.target.value)}}
                />
                <div className="style-error">{this.state.ageErorr}</div>
              </label>
              <div className="style-error">{this.state.err}</div>
            <button
              onClick={() => {
                const isValid = this.validate(users);
                  if (isValid) {
                  addUser(this.state.newUser)
                  this.resetForm()
                }
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
