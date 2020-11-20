import React from 'react';
import FacebookPage from './FacebookAPI.js'

export default function Home() {

  var facebookProps = 
  {
    width: "",
    height: ""
  }

  return (
    <div>
      <h1>Home</h1>
      <FacebookPage{...facebookProps}/>
    </div>
  );
}