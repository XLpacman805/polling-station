import React from 'react';
import './App.css';
import { Router } from "@reach/router"; //, Link

import Home from './components/Home';
import SignIn from './components/SignIn';
import CreatePoll from './components/CreatePoll';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Home path="/" />
        <SignIn path="/sign-in" />
        <CreatePoll path="/create-poll" />
      </Router>
    );
  }
}

export default App;
