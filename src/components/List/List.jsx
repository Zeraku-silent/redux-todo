import { TasksList } from "./List.styles";
import { Task } from "../Task";
import { Controller } from "../Controller";
import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  createNewTask,
  removeTask,
  taskEditing,
  toggleCheckbox,
  toggleSort,
} from "../../store";

export const List = () => {
  // const [sort, setSort] = useState(true);
  // const [filter, setFilter] = useState("all");
  // const [filtredTasks, setFiltredTasks] = useState([]);
  // const [time, setTime] = useState([]);

  // useEffect(() => {
  //   const startStoradge = localStorage.getItem("tasks") || "[]";
  //   setTasks(JSON.parse(startStoradge));
  // }, []);

  // useEffect(() => {
  //   if (tasks.length > 0) {
  //     localStorage.setItem("tasks", JSON.stringify(tasks));
  //   }
  // }, [tasks]);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const sort = useSelector((state) => state.sorted.sorted);

  const tasksSort = () => {
    const sorted = tasks.sort((a, b) => {
      if (b.date > a.date) {
        return -1;
      }
    });
    return sort ? sorted : sorted.reverse();
  };

  const addTodo = (text) => {
    dispatch(createNewTask(text));
    // tasksSort();
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
    if (tasks.length === 1) {
      localStorage.setItem("tasks", "[]");
    }
  };

  const handleChange = (id) => {
    dispatch(toggleCheckbox(id));
  };

  const taskNameChange = (id, text) => {
    // dispatch(taskEditing(id, text));
    dispatch({ type: "EDIT_TASK", payload: { id, text } });
  };

  const changeSort = () => {
    dispatch(toggleSort());
    tasksSort();
  };
  // const changeFilter = (e) => {
  //   setFilter(e.target.value);
  // };

  // const showFiltred = () => {
  //   setFiltredTasks(
  //     tasks.filter((task) => {
  //       if (filter === "success") {
  //         return task.checked;
  //       }
  //       if (filter === "unsuccess") {
  //         return !task.checked;
  //       }

  //       return tasks;
  //     })
  //   );
  // };
  useEffect(() => {
    tasksSort();
  }, [sort, tasks]);

  // useEffect(() => {
  //   showFiltred();
  // }, [tasks, filter]);

  return (
    <div>
      <Controller addTodo={addTodo} />
      <button
        style={{
          backgroundColor: "green",
          border: "1px solid gray",
          color: "white",
          borderRadius: 8,
          padding: 6,
          margin: 5,
          textDecoration: "none",
          display: "inline - block",
          fontSize: 12,
        }}
        onClick={changeSort}
      >
        ↓↑
      </button>
      <TasksList>
        {/* <select value={filter} onChange={changeFilter}>
          <option value="all">Все задачи</option>
          <option value="unsuccess">Только невыполненные</option>
          <option value="success">Только выполненные</option>
        </select> */}

        {tasks.map((item) => (
          <Task
            editingTask={taskNameChange}
            task={item}
            key={item.id}
            handleRemove={handleRemove}
            handleToggle={handleChange}
          >
            {/* {item.checked ? <p>'Выполнено'</p> : <p>'Не выполнено'</p>} */}
          </Task>
        ))}
      </TasksList>
    </div>
  );
};
