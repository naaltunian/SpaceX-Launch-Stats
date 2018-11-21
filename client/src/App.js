import React, { Component } from 'react';
import './App.css';
import SpaceXLogo from './spacexLogo.png';
import { Z_BLOCK } from 'zlib';

class App extends Component {
  render() {
    return (
      <div>
        <img src={SpaceXLogo} alt="SpaceX" style={{width: 300, display: "block", margin: "auto"}}></img>
      </div>
    );
  }
}

export default App;
