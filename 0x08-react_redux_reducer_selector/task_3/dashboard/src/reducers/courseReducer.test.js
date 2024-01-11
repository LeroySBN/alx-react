import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    const initialState = courseReducer(undefined, {});
    expect(initialState).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const mockData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
    ];

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: mockData,
    };

    const state = courseReducer([], action);
    expect(state).toEqual(mockData);
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
    ];

    const action = {
      type: SELECT_COURSE,
      index: 1,
    };

    const state = courseReducer(initialState, action);
    expect(state[1].isSelected).toEqual(true);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: true,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
    ];

    const action = {
      type: UNSELECT_COURSE,
      index: 0,
    };

    const state = courseReducer(initialState, action);
    expect(state[0].isSelected).toEqual(false);
  });
});
