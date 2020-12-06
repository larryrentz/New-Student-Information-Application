import React, {useState, useEffect, useRef } from 'react'
//import config from '../server/config/config.js'

require('dotenv').config();

const {
  GOOGLEMAPS_KEY
} = process.env;

export default function GoogleMap({options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();
  
  useEffect(() => {
    const onLoad = () => {
      setMap(new window.google.maps.Map(ref.current, options))
    }
    if (!window.google) {
      const script = document.createElement(`script`)
      script.src = GOOGLEMAPS_KEY;
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])
  if (map && typeof onMount === `function`) onMount(map, onMountProps)
  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  )
}

export function addMarkers(map, locations) {
  locations.forEach((location, index) => {
    const marker = new window.google.maps.Marker({
      map,
      position: location.coords,
      title: location.title,
    })
    if(location.content){
      var infoWindow = new window.google.maps.InfoWindow({
        content:location.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  })
}

export var mapOptions =
{
  center: { lat:29.6436, lng:-82.3549 }, 
  zoom: 15, 
}

export var locationList = [
  {
    coords:{lat:29.6499,lng:-82.3487},
    content:'<h3>Ben Hill Griffin Stadium</h3>'
  },
  {
    coords:{lat:29.6465,lng:-82.3480},
    content:'<h3>Reitz Union</h3>'
  },
  {
    coords:{lat:29.6481,lng:-82.3437},
    content:'<h3>Marston Science Library</h3>'
  },
  {
    coords:{lat:29.6501, lng: -82.3466},
    content:'<h3>Student Recreation & Fitness Center</h3>'
  },
  {
    coords:{lat:29.6494, lng: -82.3512},
    content:'<h3>Stephen C. O\'Connell Center</h3>'
  }
];


