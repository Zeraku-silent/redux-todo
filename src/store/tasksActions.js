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

export const taskEditing = (payload) => ({
  type: "EDIT_TASK",
  payload: { id: payload.id, ...payload },
});

export const loadStorage = (payload) => ({
  type: "LOAD_STORAGE",
  payload,
});
