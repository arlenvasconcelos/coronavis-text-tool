// Actions
const LOAD = 'dataSearched/LOAD';

// State
const initialState = {
  data: []
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}

// Actions Creators
export function dataSearched(data) {
  return { type: LOAD, data };
}
