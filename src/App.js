import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Menu">
          <span>Welcome to Ooer</span>
          <a href="ooer.com">Blog</a>
          <a href="github.com">Github</a>
          <a href="twitter.com">Twitter</a>
          <a href="linkedin.com">LinkedIn</a>
          <a href="synth.ooer.com">Synthboard</a>
          <a href="test.ooer.com">Test The Web</a>
          <a href="decks.ooer.com">Decks</a>
        </div>
      </div>
    );
  }
}

export default App;
