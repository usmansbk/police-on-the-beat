import React from 'react';
import { View, Image } from 'react-native';
import { FlatList } from 'react-navigation';
import { Headline } from 'react-native-paper';

export default class Notifications extends React.Component {
  _renderEmpty = () => (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image
        source={require('../../assets/empty.png')}
        style={{
          width: 200,
          height: 200
        }}
      />
      <Headline style={{color: 'gray'}}>No Notifications</Headline>
    </View>
  );

  render() {
    return (
      <FlatList
        data={[]}
        contentContainerStyle={{
          flex: 1,
          backgroundColor: 'white'
        }}
        renderItem={this._renderItem}
        ListEmptyComponent={this._renderEmpty}
      />
    );
  }
}