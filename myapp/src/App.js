import React, { Component } from 'react';
import New from './New';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <New/>
      </div>
    );
  }
}

export default App;
