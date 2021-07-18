import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Footer from './Footer';

const mapStyles = {
  margin: '10px',
  position: 'top',
  width: '70%',

  height: '50%'
};

export class MapContainer extends Component {
  render() {
    return (
<div>
<center>
     <Map
     
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
</center>

<br /><br /><br /><br /><br />
</div>

    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCchX3L1djMzIW6U9hDE_JVOJwhRaKUDzQ')
})(MapContainer);