// converting into immutable object using Map
import { Map } from 'immutable';
// const Map = require('immutable').Map;

const getImmutableObject = (object) => Map(object);

export default getImmutableObject;
// module.exports = { getImmutableObject };

