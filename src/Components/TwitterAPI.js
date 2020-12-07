  
import React from 'react'; 
import { TwitterTimelineEmbed} from 'react-twitter-embed';
//<a class="twitter-timeline" data-lang="en" data-width="600" data-height="600" data-theme="light" href="https://twitter.com/UF?ref_src=twsrc%5Etfw">Tweets by UF</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

export default function TwitterPage({width, height}){
    return (
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="UF"
        noFooter
        options={{height: height, width: width}}
      />    
    );
}