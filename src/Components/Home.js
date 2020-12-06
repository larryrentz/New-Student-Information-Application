import React from 'react';
import FacebookPage from './FacebookAPI.js'
import TwitterPage from './TwitterAPI.js'

export default function Home() {

  var facebookProps =
  {
    width: "400",
    height: "400"
  }

  var twitterProps =
  {
    width: "400",
    height: "400"
  }

  return (
    <div>
      <div class="column">
        <h1 class="header_title">Home</h1>
      </div>
      <div class="column">
        <div class="space">
          <FacebookPage{...facebookProps}/>
        </div>
        <div class="space">
          <TwitterPage{...twitterProps}/>
        </div>
      </div>
    </div>
  );
}
