import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { Provider as PapaerProvider } from 'react-native-paper';
import Navigations from './src';


class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <PapaerProvider>
        <Navigations />
      </PapaerProvider>
    )
  }
}

export default App;
