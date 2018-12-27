import React, { Component } from 'react';
import '../style/app.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src="TQlogo.png" alt="Logo" id="trivialogo"
            height={100}
            width={200}/>
        <header className="App-header" />
          <div className="MainContent">
          <p>
          </p>
          </div>
      <Footer className="Footer"/>
          <Button />

      </div>
    );
  }
}
export default App;
