import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users/Users.js'
import CreateUser from './components/users/CreateUser.js'
import Home from './components/Home.js'
import Chat from './components/Chat/Chat.js'
import  { Route, Switch, Link } from "react-router-dom";
import { UserProvider } from './UserProvider'
import { MessageProvider } from './MessageProvider'

function App() {
  return (
    <UserProvider>
     <div className="head">
        <span className="nav-link">
          <Link to="/">Home</Link>
        </span>
        <span className="nav-link">
          <Link to="/users">Users list</Link>
        </span>
        <span className="nav-link">
          <Link to="/create">Create User</Link>
        </span>
        <span className="nav-link">
          <Link to="/chat">Chat</Link>
        </span>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/create" component={CreateUser} />
        <MessageProvider>
        <Route path="/chat" component={Chat} />
        </MessageProvider>
      </Switch>
    </UserProvider>
  );
}

export default App;
