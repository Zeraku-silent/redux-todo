import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./tasksReducer";
import { createNewTask } from "./tasksActions";
import { removeTask } from "./tasksActions";
import { toggleCheckbox } from "./tasksActions";
import { taskEditing } from "./tasksActions";
import { sortReducer } from "./sortReducer";
import { toggleSort } from "./sortReducer";
import { toggleFilter } from "./filterReducer";
import { filterReducer } from "./filterReducer";

export { createNewTask };
export { removeTask };
export { toggleCheckbox };
export { taskEditing };
export { toggleSort };
export { toggleFilter };

const rootReducer = combineReducers({
  tasks: tasksReducer,
  sorted: sortReducer,
  filter: filterReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
