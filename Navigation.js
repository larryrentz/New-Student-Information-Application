import React from 'react';
 
import { NavLink } from 'react-router-dom';
 //this is where the navigation bar goes
const Navigation = () => {
    return (
        
   <div>
      <div class="topnav"> 
         <a class="active" href="#logo">UF</a>
         <NavLink to="/home">Home</NavLink>
         <NavLink to="/map">Map</NavLink>
         <NavLink to="/academics">Academics</NavLink>
         <NavLink to="/health">Health</NavLink>
          <NavLink to="/finance">Finance</NavLink>
         <NavLink to="/housing">Housing</NavLink>
      </div>
   </div>
    );
}
 
export default Navigation;