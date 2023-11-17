import { TasksList } from "./List.styles";
import { Task } from "../Task";
import { Controller } from "../Controller";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

export const List = () => {
  // const [tasks, setTasks] = useState([]);
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

  // const tasksSort = () => {
  //   setFiltredTasks((prev) => {
  //     const sorted = [...prev].sort((a, b) => {
  //       if (b.date > a.date) {
  //         return -1;
  //       }
  //     });
  //     return sort ? sorted : sorted.reverse();
  //   });
  // };
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const addTodo = (text) => {
    const date = new Date().toLocaleString();
    const id = nanoid();
    const newTask = { id, text, checked: false, date };
    dispatch({ type: "ADD_TASK", payload: newTask });
    // setTasks((prev) => [...prev, newTask]);
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
    console.log(id);
    if (tasks.length === 1) {
      localStorage.setItem("tasks", "[]");
    }
  };

  // const handleChange = (id) => {
  //   setTasks((prev) =>
  //     prev.map((task) =>
  //       task.id !== id ? task : { ...task, checked: !task.checked }
  //     )
  //   );
  // };

  // const taskNameChange = (id, text) => {
  //   setTasks((prev) =>
  //     prev.map((task) => (task.id !== id ? task : { ...task, text }))
  //   );
  // };

  // const changeSort = () => {
  //   setSort((prev) => !prev);
  // };
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
  // useEffect(() => {
  //   tasksSort();
  // }, [sort, tasks]);

  // useEffect(() => {
  //   showFiltred();
  // }, [tasks, filter]);

  return (
    <div>
      <Controller addTodo={addTodo} />

      <TasksList>
        {/* <select value={filter} onChange={changeFilter}>
          <option value="all">Все задачи</option>
          <option value="unsuccess">Только невыполненные</option>
          <option value="success">Только выполненные</option>
        </select>
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
        </button> */}

        {tasks.map((item) => (
          <Task
            // editingTask={taskNameChange}
            task={item}
            key={item.id}
            handleRemove={handleRemove}
            // handleToggle={handleChange}
          >
            {/* {item.checked ? <p>'Выполнено'</p> : <p>'Не выполнено'</p>} */}
          </Task>
        ))}
      </TasksList>
    </div>
  );
};
