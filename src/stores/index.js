import Location from './location';
import Data from './data';

class Stores {
  constructor() {
    const location = new Location;
    const data = new Data;

    this.location = location;
    this.data = data;
  }
}

export default new Stores();