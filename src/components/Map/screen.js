import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default ({ region, markers=[], onCalloutPress }) => (
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
          key={marker.id}
          coordinate={marker.geo_point}
          title={marker.title}
          description={marker.subtitle}
          pinColor={marker.color}
          onCalloutPress={() => onCalloutPress(marker.id)}
        />
      ))
    }
  </MapView>
);