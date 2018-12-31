import React, { Component } from 'react';
import '../style/app.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import About from './About';
import Home from './Home'

import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (

    <Router>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/header" component={Header}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/footer" component={Footer}></Route>
        <Footer/>
      </div>
    </Router>



    );
  }
}
export default App;
