import { Task } from "../Task";
import { Controller } from "../Controller";
import { useEffect } from "react";

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
import { Button, Box, Select, Flex, Center, Grid } from "@chakra-ui/react";

export const List = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const sort = useSelector((state) => state.sorted.sorted);
  const filter = useSelector((state) => state.filter.filter);

  useEffect(() => {
    const startStorage = localStorage.getItem("storage") || "[]";
    dispatch(loadStorage(JSON.parse(startStorage)));
  }, [dispatch]);

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

  const tasksSort = () => {
    const sorted = tasksFiltration().sort((a, b) => {
      if (b.date > a.date) {
        return -1;
      }
      if (b.date < a.date) {
        return 1;
      }
      return 0;
    });
    return sort ? sorted : sorted.reverse();
  };

  useEffect(() => {
    tasksFiltration();
  });

  useEffect(() => {
    tasksSort();
  });

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
    <Box className="mainBoxList">
      <Center>
        <Controller addTodo={addTodo} />
      </Center>

      <Flex w="500px" pl={"35px"} alignItems={"center"}>
        <Select w={"280px"} value={filter} onChange={changeFilter}>
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
      <Grid
        className="GREEEED"
        // justifyContent={"space-evenly"}
        gridGap={"20px"}
        gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"}
        // gridTemplateRows={"1fr 1fr 1fr 1fr"}

        margin="30px"
      >
        {tasksSort().map((item) => (
          <Task
            editingTask={taskNameChange}
            task={item}
            key={item.id}
            handleRemove={handleRemove}
            handleToggle={handleChange}
          ></Task>
        ))}
      </Grid>
    </Box>
  );
};
