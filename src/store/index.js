import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./tasksReducer";
import { createNewTask } from "./tasksActions";

export { createNewTask };

const rootReducer = combineReducers({
  tasks: tasksReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
