//import config from '../server/config/config.js'
import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import dotenv from 'dotenv'
dotenv.config();

const {
  REACT_APP_GOOGLE_API_KEY
} = process.env;

export class MapContainer extends Component {

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

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
        lng: -82.3487,
      },

      mapConnel: {
        lat: 29.6494,
        lng: -82.3512
      },

      mapRec: {
        lat: 29.6501,
        lng: -82.3466
      },
      mapReitz: {
        lat: 29.6465,
        lng: -82.3480
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
          onClick={this.onMapClicked}
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
            onClick={this.onMarkerClick}
            title='University of Florida'
            position={{ lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng }}
            />
            {/*<InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h3>University of Florida</h3>
              </div>
            </InfoWindow>*/}

            <Marker
            onClick={this.onMarkerClick}
            title='Marston Science Library'
            position={{ lat: this.state.mapMarker.lat, lng: this.state.mapMarker.lng }}
            />
            {/*<InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h3>Marston Science Library</h3>
              </div>
            </InfoWindow>*/}

            <Marker
            onClick={this.onMarkerClick}
            title='Ben Hill Griffin Stadium'
            position={{ lat: this.state.mapGriffin.lat, lng: this.state.mapGriffin.lng }}
            />
            {/*<InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h3>Ben Hill Griffin Stadium</h3>
              </div>
            </InfoWindow>*/}

            <Marker
            onClick={this.onMarkerClick}
            title="Stephen C. O'Connell Center"
            position={{ lat: this.state.mapConnel.lat, lng: this.state.mapConnel.lng }}
            />
            {/*}<InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h3>Stephen C. O'Connell Center</h3>
              </div>
            </InfoWindow>*/}

            <Marker
            onClick={this.onMarkerClick}
            title="Student Recreation & Fitness Center"
            position={{ lat: this.state.mapRec.lat, lng: this.state.mapRec.lng }}
            />
            {/*<InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h3>Student Recreation & Fitness Center</h3>
              </div>
            </InfoWindow>*/}

            <Marker
            onClick={this.onMarkerClick}
            title="Reitz Union"
            position={{ lat: this.state.mapReitz.lat, lng: this.state.mapReitz.lng }}
            />
            {/*<InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h3>Reitz Union</h3>
              </div>
            </InfoWindow>*/}

        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (`${REACT_APP_GOOGLE_API_KEY}`)
})(MapContainer)
