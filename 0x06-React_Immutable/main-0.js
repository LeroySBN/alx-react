// const { getImmutableObject } = require('./0-fromjs.js');
const { getImmutableObject } = require('./1-map.js');

const data = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}

const immutableData = getImmutableObject(data);

console.log(immutableData);
