import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./tasksReducer";
import { createNewTask } from "./tasksActions";
import { removeTask } from "./tasksActions";
import { toggleCheckbox } from "./tasksActions";

export { createNewTask };
export { removeTask };
export { toggleCheckbox };

const rootReducer = combineReducers({
  tasks: tasksReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
