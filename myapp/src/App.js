import React, { Component } from 'react';
import New from './New';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <New name="ajju" age="21" job="React-Developer"/>
        <New name="vicky" age="25" job="Python-Developer"/>
        
      </div>
    );
  }
}

export default App;
