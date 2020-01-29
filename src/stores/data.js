import { observable, action } from 'mobx';

export default class Data {
  @observable markers = [{
    title: 'Minor Theft',
    description: 'Lorem',
    location: {
     latitude: 10.5823395,
     longitude: 7.4202823
    }
  }];

}