import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Map from './components/Map';
import Notifications from './components/Notifications';
import About from './components/About'; 
import Details from './components/Details';

const MapStack = createStackNavigator({
  Map,
  Details
}, {
  defaultNavigationOptions: {
    headerShown: false 
  }
});

const TabNavigator = createBottomTabNavigator({
  Map: MapStack,
  Notifications,
  About
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Map') {
        iconName = focused ? 'map-marker' : 'map-marker-outline';
      } else if (routeName === 'Notifications') {
        iconName = focused ? 'bell' : 'bell-outline';
      } else if (routeName === 'About') {
        iconName = focused ? 'shield-account' : 'shield-account-outline';
      }
      return <Icon name={iconName} size={25} color={tintColor} />;
    }
  })
});

export default createAppContainer(TabNavigator);