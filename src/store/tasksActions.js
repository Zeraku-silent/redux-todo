export const createNewTask = (payload) => ({
  type: "ADD_TASK",
  payload,
});

export const removeTask = (payload) => ({
  type: "REMOVE_TASK",
  payload,
});

export const toggleCheckbox = (payload) => ({
  type: "TOGGLE_CHECKBOX",
  payload,
});
