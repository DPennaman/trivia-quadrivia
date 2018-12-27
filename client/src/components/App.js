import React, { Component } from 'react';
import '../style/app.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src="TQlogo.png" alt="Logo"
            height={100}
            width={400}/>
        <header className="App-header" />
          <div className="MainContent">
          <p>
          </p>
          </div>
          <Button />
      </div>
    );
  }
}
export default App;
