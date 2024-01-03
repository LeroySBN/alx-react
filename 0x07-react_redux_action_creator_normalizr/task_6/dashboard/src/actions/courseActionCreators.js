import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

const dispatch = useDispatch();
const boundSelectCourse = bindActionCreators(selectCourse, dispatch);
const boundUnSelectCourse = bindActionCreators(unSelectCourse, dispatch);
