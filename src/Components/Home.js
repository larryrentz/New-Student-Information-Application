import React from 'react';
import FacebookPage from './FacebookAPI.js'
import TwitterPage from './TwitterAPI.js'

export default function Home() {

  var facebookProps =
  {
    width: "",
    height: "400"
  }

  var twitterProps =
  {
    width: 400,
    height: 400
  }

  return (
    <div>
      <div class="column">
        <h1>Home</h1>
      </div>
      <div class="column">
        <FacebookPage{...facebookProps}/>
        <TwitterPage{...twitterProps}/>
      </div>
    </div>
  );
}
