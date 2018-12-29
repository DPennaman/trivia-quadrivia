import React, { Component } from 'react';
import '../style/app.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import About from './About';

const Home = () => {
  return(
    <div className="App">
    <header className="App-header" />
    <img src="TQlogo.png" alt="Logo" id="trivialogo"
      height={100}
      width={200}/>
    <div className="Qbox">

      <Button className="Button" />
    </div>
    <div className="MainContent">
    <p>
    </p>
    </div>
    <Footer className="Footer"/>
    </div>

  )
}

export default Home
