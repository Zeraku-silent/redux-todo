import { TasksList } from "./List.styles";
import { Task } from "../Task";
import { Controller } from "../Controller";
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

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
import {
  Button,
  Container,
  Box,
  Select,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";

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
    <Box bg mt="30" pl={10}>
      <Center>
        <Controller addTodo={addTodo} />
      </Center>

      <Flex mb={20} pl="3" w="280px">
        <Select value={filter} onChange={changeFilter}>
          <option value="all">Все задачи</option>
          <option value="unsuccess">Только невыполненные</option>
          <option value="success">Только выполненные</option>
        </Select>

        <Button
          size="sm"
          mx={2}
          colorScheme="teal"
          variant="solid"
          onClick={changeSort}
        >
          ↓↑
        </Button>
      </Flex>
      <Flex flexDir={"column"} margin="6px">
        {tasksSort().map((item) => (
          <Task
            editingTask={taskNameChange}
            task={item}
            key={item.id}
            handleRemove={handleRemove}
            handleToggle={handleChange}
          ></Task>
        ))}
      </Flex>
    </Box>
  );
};
