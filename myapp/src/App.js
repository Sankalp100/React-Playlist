import React, { Component } from 'react';
import New from './New';

class App extends Component {
  state={
    news : [
      { name: "Ryu", age:30, belt: 'black', id:1},
      {name: "ajju", age:20, belt: 'green', id:2},
      {name: "vocky", age:25, belt: 'pink', id:3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <News news = {this.state.news}/>
        
      </div>
    );
  }
}

export default App;
