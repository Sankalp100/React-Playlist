import React, { Component } from 'react';
import Ninjas from './Ninjas';
import Add from './Add';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninjas) => {
    console.log(ninjas);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <Add addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;