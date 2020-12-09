import React, { useState } from 'react';
import GoogleMap, {addMarkers, locationList, mapOptions} from './GoogleMap.js';

export default function Map() {
    var mapProps = {
    options: mapOptions,
    onMount: addMarkers,
    onMountProps: locationList,
  }
  const [selectedCenter, setSelectedCenter] = useState(null);

  return (
    <div>
      <h1>Map</h1>
      <GoogleMap{...mapProps} />
    </div>
  );
  }
