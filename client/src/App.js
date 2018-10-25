import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Serving Advertisment From Cookie-Sync Mainframe (GOTO Partner 1).
          </p>
          <img src='https://cookie-sync-partner-1.herokuapp.com/adwork' alt="Ad Retarget" />
          <p>
            Volume Bid
          </p>
           {/* <img src='https://cookie-sync-mainframe.herokuapp.com/prebid' /> */ }
          <p>
            Timed Bid
          </p>
          { /* <img src='https://cookie-sync-mainframe.herokuapp.com/timed-prebid' /> */ }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
