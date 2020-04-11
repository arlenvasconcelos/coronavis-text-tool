import api from '../../service/api';

// Actions
const LOAD = 'search/LOAD';

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
export function loadProducts(data) {
  return { type: LOAD, data };
}
