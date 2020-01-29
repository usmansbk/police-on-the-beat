import React from 'react';
import { inject, observer } from 'mobx-react';
import Screen from './screen';

class Container extends React.Component {
  render() {
    const data = this.props.stores.getData(this.props.navigation.getParam('id'));
    const {
      title,
      subtitle,
      date,
      description
    } = data;
    return (
      <Screen
        subtitle={subtitle}
        date={new Date(date).toDateString()}
        description={description}
        pictures={[]}
      />
    );
  }
}

export default inject("stores")(observer(Container));