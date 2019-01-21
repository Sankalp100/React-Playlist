import React, { Component } from 'react';
import New from './New';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <New Name="ajju" Age="21" Job="React-Developer"/>
        <New Name="vicky" Age="24" Job="Python-Developer"/>
      </div>
    );
  }
}

export default App;
