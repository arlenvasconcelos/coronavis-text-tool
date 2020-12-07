const initialState = {
  errorStatus: false,
  errorMessage: "",
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOPICS":
      return {
        ...state,
        data: action.payload,
        errorMessage: "",
        errorStatus: false,
      };

    case "SET_TOPICS_ERROR":
      return {
        ...state,
        data: {},
        errorMessage: action.payload,
        errorStatus: true,
      };
    default:
      return state;
  }
}

function setTopics(payload) {
  return { type: "SET_TOPICS", payload };
}

function setError(payload) {
  return { type: "SET_TOPICS_ERROR", payload };
}

export { setError, setTopics };
