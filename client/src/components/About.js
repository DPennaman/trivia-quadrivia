import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style/about.css';

const About = () => (
    <div align="center" classname='tqlogo'>
      <Header/>
      <h1>ABOUT US</h1>
      <div className='about'>
        <div>
          <h2>Lester Caballero</h2>
            <img src="Lester_Caballero02.jpg" alt="Lester" id="lcaballero"
                height={100}
                width={100}/>
            <p> Aspiring front end developer, Miami Native, and Berklee College of Music Alumni.</p>
          <h2>Denise Pennaman</h2>
              <img src="Denise_Pennaman.jpg" alt="Denise" id="dpennaman"
                  height={100}
                  width={100}/>
              <p> Florida born Nurse turned full stack developer.</p>
          </div>
          <div className= 'Pics'>
          <h2>Ana Gonzalez</h2>
              <img src="Ana_Gonzalez01.jpg" alt="Ana" id="agonzalez"
                  height={100}
                  width={100}/>
              <p> Miami born aspiring front-end developer and University of Miami Alumni.</p>
          <h2>Quintin Osuchukwu</h2>
              <img src="Quintin_Osuchukwu01.jpg" alt="Quintin" id="qosuchukwu"
                  height={100}
                  width={100}/>
              <p> IT professional integrating development principles. Texas born and raised! Army Vet.</p>
          </div>
        </div>
      </div>
    );

export default About
