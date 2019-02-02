import React, { Component } from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/home';
import About from './component/About';
import Contact from './component/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
