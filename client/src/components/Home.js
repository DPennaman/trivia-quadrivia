import React, { Component } from 'react';
import '../style/app.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import About from './About';

const Home = () => {
  return(
    <div className="App">
      <Header/>
    <header className="App-header" />
    <div className="MainContent">
    <p>
    </p>
    <Button className="Button" />
    </div>
    <Footer className="Footer"/>
    </div>

  )
}

export default Home
