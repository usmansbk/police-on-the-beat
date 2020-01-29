import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default ({ region, markers=[] }) => (
  <MapView
    region={region}
    style={{
      ...StyleSheet.absoluteFillObject
    }}
    showsUserLocation
    minZoomLevel={17}
  >
    {
      markers.map(marker => (
        <Marker
          coordinate={marker.location}
          title={marker.title}
          description={marker.description}
        />
      ))
    }
  </MapView>
);