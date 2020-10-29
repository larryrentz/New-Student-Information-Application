import React from 'react'
import Map, {addMarkers, locationList, mapOptions} from './Components/GoogleMap'

import './App.css';

function App() {
  
  var mapProps = {
    options: mapOptions,
    onMount: addMarkers, 
    onMountProps: locationList, 
  }
  return (
    <div >
      <h1>GatorAider</h1>
      <Map{...mapProps} />
    </div>
  );
}

export default App;