import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { Provider as PapaerProvider } from 'react-native-paper';
import { Provider as MobxProvider } from 'mobx-react';
import Navigations from './src';
import stores from './src/stores';


class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <MobxProvider stores={stores}>
        <PapaerProvider>
          <Navigations />
        </PapaerProvider>
      </MobxProvider>
    )
  }
}

export default App;
