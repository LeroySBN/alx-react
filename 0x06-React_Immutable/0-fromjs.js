// Converting an object into an Immutable object using fromJS
import { fromJS } from 'immutable';

function getImmutableObject({object}) {
  return fromJS(object);
};

export default getImmutableObject;
