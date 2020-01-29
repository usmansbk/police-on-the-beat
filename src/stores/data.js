import { observable, action } from 'mobx';

export default class Data {
  @observable markers = [
    {
      id: '1',
      title: 'Theft',
      description: 'Lorem',
      level: 1,
      location: {
        latitude: 10.5623395,
        longitude: 7.4102823
      }
    },
    {
      id: '2',
      title: 'Vandalism',
      level: 4,
      description: 'Lorem',
      location: {
        latitude: 10.5623395,
        longitude: 7.4102823
      }
    },
    {
      id: '3',
      title: 'Armed Robbery',
      description: 'Lorem',
      level: 10,
      location: {
        latitude: 10.5423395,
        longitude: 7.4102820
      }
    },
  ];

}