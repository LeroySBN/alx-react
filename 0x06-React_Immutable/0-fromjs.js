// Converting an object into an Immutable object using fromJS
const fromJS = require('immutable').fromJS;

function getImmutableObject(object) {
  return fromJS(object);
};

module.exports = getImmutableObject;