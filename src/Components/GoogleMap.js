//import config from '../server/config/config.js'
import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

require('dotenv').config();

const {
  REACT_APP_GOOGLE_API_KEY
} = process.env;

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      mapCenter: {
        lat: 29.6436,
        lng: -82.3549
      },

      mapMarker: {
        lat: 29.6481,
        lng: -82.3437
      },

      mapGriffin: {
        lat: 29.6499,
        lng: -82.3487
      },

      mapConnel: {
        lat: 29.6494,
        lng: -82.3512
      },

      mapRec: {
        lat: 29.6501,
        lng: -82.3466
      },
      mapCISE: {
        lat: 29.6485,
        lng: -82.3438
      }

    };
  }

  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        // update center state
        this.setState({ mapCenter: latLng });
        this.setState({address});
      })
      .catch(error => console.error('Error', error));
 
 
 
 
    };
 
  render() {
    return (
      <div id='googleMaps'>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <Map 
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
        >
          <Marker 
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }} />

          <Marker 
            position={{
              lat: this.state.mapMarker.lat,
              lng: this.state.mapMarker.lng,
            }} />


            <Marker 
            position={{
              lat: this.state.mapGriffin.lat,
              lng: this.state.mapGriffin.lng,
            }} />

            <Marker 
            position={{
              lat: this.state.mapConnel.lat,
              lng: this.state.mapConnel.lng,
            }} />

          <Marker 
            position={{
              lat: this.state.mapRec.lat,
              lng: this.state.mapRec.lng,
            }} />
             <Marker 
            position={{
              lat: this.state.mapCISE.lat,
              lng: this.state.mapCISE.lng,
            }} />


        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (`${REACT_APP_GOOGLE_API_KEY}`)
})(MapContainer)
