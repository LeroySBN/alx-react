// Converting an object into an Immutable object using fromJS
import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  return fromJS(object);
};
