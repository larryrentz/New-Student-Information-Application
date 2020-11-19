import React from 'react';
import GoogleMap, {addMarkers, locationList, mapOptions} from './GoogleMapAPI.js';

export default function Map() {
    var mapProps = {
    options: mapOptions,
    onMount: addMarkers,
    onMountProps: locationList,
  }
  
  return (
    <div>
      <h1>Map</h1>
      <GoogleMap{...mapProps} />
    </div>
  );
  }