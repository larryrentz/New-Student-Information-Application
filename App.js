//import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Map from './components/Map';
import Academics from './components/Academics';
import Health from './components/Health';
import Finance from './components/Finance';
import Housing from './components/Housing';
import Navigation from './components/Navigation';


class App extends Component {

  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/home" component={Home} exact/>
             <Route path="/map" component={Map}/>
             <Route path="/academics" component={Academics}/>
             <Route path="/health" component={Health}/>
             <Route path="/finance" component={Finance}/>
             <Route path="/housing" component={Housing}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }

}

export default App;
