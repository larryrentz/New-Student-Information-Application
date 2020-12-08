import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
//import config from '../server/config/config.js'

require('dotenv').config();

const {
  FACEBOOKAPP_ID
} = process.env;

export default function FacebookPage({width, height}){
    return (
      <FacebookProvider appId= {`${FACEBOOKAPP_ID}`}>
        <Page 
        href="https://www.facebook.com/uflorida/" 
        tabs="timeline" 
        width = {width}
        height = {height}
        small_header = "true"
        />
      </FacebookProvider>    
    );
}



