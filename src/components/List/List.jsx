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
  toggleFilter,
  loadStorage,
} from "../../store";

export const List = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const sort = useSelector((state) => state.sorted.sorted);
  const filter = useSelector((state) => state.filter.filter);

  useEffect(() => {
    const startStorage = localStorage.getItem("storage") || "[]";
    dispatch(loadStorage(JSON.parse(startStorage)));
  }, []);

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(tasks));
  }, [tasks]);

  const changeFilter = (e) => {
    dispatch(toggleFilter(e.target.value));
  };

  const tasksFiltration = () => {
    const filtredTasks = tasks.filter((task) => {
      if (filter === "success") {
        return task.checked;
      }
      if (filter === "unsuccess") {
        return !task.checked;
      }
      return tasks;
    });
    return filtredTasks;
  };

  useEffect(() => {
    tasksFiltration();
  }, [tasks, filter]);
  useEffect(() => {
    tasksSort();
  }, [sort, tasks]);

  useEffect(() => {
    tasksSort();
  }, [sort, tasks]);

  const tasksSort = () => {
    const sorted = tasksFiltration().sort((a, b) => {
      if (b.date > a.date) {
        return -1;
      }
    });
    return sort ? sorted : sorted.reverse();
  };

  const addTodo = (text) => {
    dispatch(createNewTask(text));
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  const handleChange = (id) => {
    dispatch(toggleCheckbox(id));
  };

  const taskNameChange = (id, text) => {
    dispatch(taskEditing({ id, text }));
  };

  const changeSort = () => {
    dispatch(toggleSort());
  };

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
        <select value={filter} onChange={changeFilter}>
          <option value="all">Все задачи</option>
          <option value="unsuccess">Только невыполненные</option>
          <option value="success">Только выполненные</option>
        </select>
        {tasksSort().map((item) => (
          <Task
            editingTask={taskNameChange}
            task={item}
            key={item.id}
            handleRemove={handleRemove}
            handleToggle={handleChange}
          ></Task>
        ))}
      </TasksList>
    </div>
  );
};
