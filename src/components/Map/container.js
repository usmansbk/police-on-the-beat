import React from 'react';
import { inject, observer } from 'mobx-react';
import Screen from './screen';

class Container extends React.Component {

  async componentDidMount() {
    await this.props.stores.location.watch();
  }

  componentWillUnmount = () => {
    this.props.stores.location.clearWatch();
  };

  _onCalloutPress = (id) => {
    this.props.navigation.navigate('Details', { id });
  };

  render() {
    return (
      <Screen
        region={this.props.stores.location.region}
        markers={this.props.stores.data.markers(this.props.stores.location.region)}
        onCalloutPress={this._onCalloutPress}
      />
    );
  }
}

export default inject("stores")(observer(Container));