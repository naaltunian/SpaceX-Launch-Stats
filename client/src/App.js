import React, { Component } from 'react';
import './App.css';
import SpaceXLogo from './spacexLogo.png';
import Launches from './Components/Launches.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <img src={SpaceXLogo} alt="SpaceX" style={{width: 300, display: "block", margin: "auto"}} />
            <Route exact path="/" component={Launches}></Route>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
