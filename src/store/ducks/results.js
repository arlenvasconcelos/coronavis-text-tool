const initialState = {
  data: {},
  searchTerm: "",
  errorStatus: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_RESULTS":
      return {
        ...state,
        data: action.payload,
        errorMessage: "",
        errorStatus: false,
      };
    case "SET_RESULTS_ERROR":
      return {
        ...state,
        data: {},
        searchTerm: "",
        errorMessage: action.payload,
        errorStatus: true,
      };
    default:
      return state;
  }
}

function setResults(payload) {
  return { type: "SET_RESULTS", payload };
}

function setError(payload) {
  return { type: "SET_RESULTS_ERROR", payload };
}

export { setResults, setError };
