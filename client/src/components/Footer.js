import React, { Component } from 'react';
import About from './About';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';



const Footer = () => {
   return (
      <footer>


          <p id="footer"></p>

            <ul id="US">
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
            </ul>

    <div id="followus">
       <ul id="footlogos">
         <li><img id="twitterlogo" src={"https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg"}/></li>
         <li><img id="fblogo" src={"https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"}/></li>
         <li><img id="instalogo" src={"https://dumielauxepices.net/sites/default/files/instagram-clipart-circle-648633-8388072.svg"}/></li>
         <li><img id="youlogo" src={"https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg"}/></li>
       </ul>
       <p id="TQ">Follow TriviaQuadrivia! </p>
  </div>

       <p id="footstamp">Copyright &#169; 2018  TriviaQuadrivia</p>
       <ul id="footpolicies">
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Site Map</li>
       </ul>
    </footer>

   )
}

export default Footer;
