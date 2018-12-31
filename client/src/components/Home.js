import React, { Component } from 'react';
import '../style/app.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import About from './About';

const Home = () => {
  return(
    <div className="App">
      <Header className="App-header" />

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
