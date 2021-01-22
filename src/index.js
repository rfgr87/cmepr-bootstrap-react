import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import Manifesto from "views/Manifesto/Manifesto.js";
import Releases from "views/Releases/Releases.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage1 from "views/ProfilePage/ProfilePage1.js";
import ProfilePage2 from "views/ProfilePage/ProfilePage2.js";
import ProfilePage3 from "views/ProfilePage/ProfilePage3.js";
import ProfilePage4 from "views/ProfilePage/ProfilePage4.js";
import ProfilePage5 from "views/ProfilePage/ProfilePage5.js";
import ProfilePage6 from "views/ProfilePage/ProfilePage6.js";

import LoginPage from "views/LoginPage/LoginPage.js";
// import Composer1 from "views/ProfilePage/ProfilePage.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
       <Route path="/audio" component={Releases} />
      <Route path="/nosotros" component={Manifesto} />
      <Route path='/pedrofrancofraticelli' component = {ProfilePage6}/>
      <Route path='/diegovillasenordecortina' component={ProfilePage3}/>
      <Route path='/militaaponte' component={ProfilePage2}/>
      <Route path="/royfguzman" component={ProfilePage1} />
      <Route path='/felipecorredortrellez' component={ProfilePage4}/>
      <Route path='/danielfloresdias' component={ProfilePage5}/>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    

    </Switch>
  </Router>,
  document.getElementById("root")
);
