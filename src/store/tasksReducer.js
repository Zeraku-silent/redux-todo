import { nanoid } from "nanoid";

const defaultState = {
  tasks: [],
};

export const tasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const date = new Date().toLocaleString();
      const id = nanoid();
      const newTask = { id, text: action.payload, checked: false, date };
      return { ...state, tasks: [...state.tasks, newTask] };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};
