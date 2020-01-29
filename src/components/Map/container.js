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

  render() {
    return (
      <Screen
        region={this.props.stores.location.region}
        markers={this.props.stores.data.markers(this.props.stores.location.region)}
      />
    );
  }
}

export default inject("stores")(observer(Container));