import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style/about.css';

const About = () => (
      <div className='about'>
        <h2>Lester Caballero</h2>
          <img src="Lester_Caballero02.jpg" alt="Lester" id="lcaballero"
              height={100}
              width={100}/>
          <p> This is filler Text</p>
        <h2>Denise Pennaman</h2>
            <img src="Denise_Pennaman.jpg" alt="Denise" id="dpennaman"
                height={100}
                width={100}/>
            <p> This is filler Text</p>
        <h2>Ana Gonzalez</h2>
            <img src="Ana_Gonzalez01.jpg" alt="Ana" id="agonzalez"
                height={100}
                width={100}/>
            <p> This is filler Text</p>
        <h2>Quintin Osuchukwu</h2>
            <img src="Quintin_Osuchukwu01.jpg" alt="Quintin" id="qosuchukwu"
                height={100}
                width={100}/>
            <p> This is filler Text</p>
        </div>
    );

export default About
