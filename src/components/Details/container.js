import React from 'react';
import { inject, observer } from 'mobx-react';
import Screen from './screen';

class Container extends React.Component {
  _goBack = () => this.props.navigation.goBack();

  render() {
    const data = this.props.stores.data.getData(this.props.navigation.getParam('id'));
    const {
      title,
      subtitle,
      date,
      description,
      pictures
    } = data;
    return (
      <Screen
        title={title}
        subtitle={subtitle}
        date={new Date(date).toDateString()}
        description={description}
        pictures={pictures}
        goBack={this._goBack}
      />
    );
  }
}

export default inject("stores")(observer(Container));