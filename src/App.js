import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users/Users.js'
import CreateUser from './components/users/CreateUser.js'
import Home from './components/Home.js'
import  { Route, Switch, Link } from "react-router-dom";
import { UserProvider } from './UserProvider'

function App() {
  return (
    <UserProvider>
      <span className="nav-link">
        <Link to="/">Home</Link>
      </span>
      <span className="nav-link">
        <Link to="/users">Users list</Link>
      </span>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/create" component={CreateUser} />
      </Switch>
    </UserProvider>
  );
}

export default App;
