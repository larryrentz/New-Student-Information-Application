import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home.js';
import Academics from './Components/Academics.js';
import Finance from './Components/Finance.js';
import Health from './Components/Health.js';
import Housing from './Components/Housing.js';
import Map from './Components/Map.js';

// TODO Add a 404 page
// TODO commit package.json file
// TODO make the homepage the default first page
// TODO! MORTGAGE.JS WAS INSTALLED, react-compound-interestwas installed, interest.js installed, Passport.js installed

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      {/* ADD Login functionality
      <div>
        <Link to="/log_in">Login</Link>
      </div>*/}
      <div>
        <div class="topnav">
          <a class="active" href="#logo">UF</a>

{/*the titles of the different navigation links*/ }
          <div>
            <Link to="/home">Home</Link>
          </div>

          <div>
            <Link to="/academics">Academics</Link>
          </div>

          <div>
            <Link to="/finance">Finance</Link>
          </div>

          <div>
            <Link to="/health">Health</Link>
          </div>

          <div>
            <Link to="/housing">Housing</Link>
          </div>

          <div>
            <Link to="/map">Map</Link>
          </div>



        </div>
      </div>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time


          NOTE TO SELF GET RID OF EXACT makes it only one homepage
        */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/log_in">
            <log_in />
          </Route>
          <Route path="/academics" component={Academics}/>
          <Route path="/finance" component={Finance}/>
          <Route path="/health" component={Health}/>
          <Route path="/housing" component={Housing}/>
          <Route path="/map" component={Map}>
            <Map />
          </Route>
        </Switch>
    </Router>
  );
}