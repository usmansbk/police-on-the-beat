import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  View,
  Text
} from 'react-native';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}

export default App;
