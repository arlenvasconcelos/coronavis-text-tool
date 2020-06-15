const initialState = {
  results: [],
  queriesHistoric: [],
  errorStatus: false,
  errorMessage: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_RESULTS":
      return {
        ...state,
        results: action.data,
        errorMessage: "",
        errorStatus: false,
      };
    case "ADD_QUERY":
      return {
        ...state,
        queriesHistoric: [...state.queriesHistoric, data],
        errorMessage: "",
        errorStatus: false,
      };

    case "SET_ERROR":
      return {
        ...state,
        errorMessage: "",
        errorStatus: true,
      };
    default:
      return state;
  }
}

// Actions Creators
export function setResults(data) {
  return { type: "SET_RESULTS", data };
}
