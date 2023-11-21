const defaultState = {
  sorted: false,
};

export const toggleSort = (payload) => ({
  type: "TOGGLE_SORT",
  payload,
});

export const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_SORT":
      return { ...state, sorted: !state.sorted };

    default:
      return state;
  }
};
