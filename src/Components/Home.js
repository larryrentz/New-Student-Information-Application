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
      <div class="column">
        <h1>Home</h1>
      </div>
      <div>
        <FacebookPage{...facebookProps}/>
      </div>
    </div>
  );
}
