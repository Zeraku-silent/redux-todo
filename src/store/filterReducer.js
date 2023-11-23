const defaultState = {
  filter: "all",
};

export const toggleFilter = (payload) => ({
  type: "TOGGLE_FILTER",
  payload,
});

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
