import React from 'react';
import logo from './logo.svg';
import './App.css';
import startFirebaseUI from './firebase';

class App extends React.Component {
  constructor(props : any) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    startFirebaseUI('#thing')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React

          </a>
        </header>

      <div id="thing"></div>
      </div>
    );
  }
}

export default App;
