const initialState = {
  results: {},
  queriesHistoric: [],
  errorStatus: false,
  errorMessage: "",
  topics: [],
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
    case "SET_TOPICS":
      return {
        ...state,
        topics: action.data,
        errorMessage: "",
        errorStatus: false,
      };
    case "ADD_QUERY":
      return {
        ...state,
        queriesHistoric: [...state.queriesHistoric, action.data],
        errorMessage: "",
        errorStatus: false,
      };

    case "SET_ERROR":
      return {
        ...state,
        errorMessage: action.data,
        errorStatus: true,
      };
    default:
      return state;
  }
}

function setResults(data) {
  return { type: "SET_RESULTS", data };
}
function setTopics(data) {
  return { type: "SET_TOPICS", data };
}

function setError(data) {
  return { type: "SET_ERROR", data };
}

function addQuery(data) {
  return { type: "ADD_QUERY", data };
}

export { setResults, setError, addQuery, setTopics };
