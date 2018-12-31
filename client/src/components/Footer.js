import React, { Component } from 'react';
import About from './About';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';



const Footer = () => {
   return (
      <footer>


  <div>
    <div id="box1"></div>
    <ul id="US">
      <li><Link to='/'>  Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </Link></li>
      <li><Link to='/about'>  About &nbsp;&nbsp;&nbsp;&nbsp;  </Link></li>
      <li><Link to='/contact'>  Contact  </Link></li>
    </ul>
  </div>


  <span id="TQ">Follow TriviaQuadrivia!</span>

       <ul id="footlogos">
         <li class="grow"><img id="twitterlogo" src={"https://cdn3.iconfinder.com/data/icons/capsocial-round/500/twitter-512.png"}/></li>
         <li class="grow"><img id="fblogo" src={"https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/1024px-Facebook_home_logo_old.svg.png"}/></li>
         <li class="grow"><img id="instalogo" src={"https://dumielauxepices.net/sites/default/files/instagram-clipart-circle-648633-8388072.svg"}/></li>
         <li class="grow"><img id="youlogo" src={"https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg"}/></li>

       </ul>



    <div>

        <span id="footstamp">Copyright &#169; 2018  TriviaQuadrivia</span>

      </div>

    </footer>

   )
}

export default Footer;
