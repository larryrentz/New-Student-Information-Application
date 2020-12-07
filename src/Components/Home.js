import React from 'react';
import FacebookPage from './FacebookAPI.js'
import './pageStyles.css';

export default function Home() {

  var facebookProps = 
  {
    width: "",
    height: ""
  }

  return (
    <div>
      <h1 className = "heading1" >Home</h1>
      <FacebookPage{...facebookProps}/>
    </div>
  );
}