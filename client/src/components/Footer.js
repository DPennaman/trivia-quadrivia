import React, { Component } from 'react';
import About from './About';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';



const Footer = () => {
   return (
      <footer>

  <div>


            <ul id="US">
              <Link to='/' class="grow">Home</Link>
              <Link to='/about' class="grow">About</Link>
              <Link to='/contact' class="grow">Contact</Link>
            </ul>
</div>

<div id="followus">
  <span id="TQ">Follow TriviaQuadrivia!</span>
       <ul id="footlogos">

         <li class="grow"><img id="twitterlogo" src={"https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg"}/></li>
         <li class="grow"><img id="fblogo" src={"https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"}/></li>
         <li class="grow"><img id="instalogo" src={"https://dumielauxepices.net/sites/default/files/instagram-clipart-circle-648633-8388072.svg"}/></li>
         <li class="grow"><img id="youlogo" src={"https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg"}/></li>
       </ul>

  </div>

    <div>

        <span id="footstamp">Copyright &#169; 2018  TriviaQuadrivia</span>

      </div>

    </footer>

   )
}

export default Footer;
