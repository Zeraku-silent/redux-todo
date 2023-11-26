import { TaskText } from "./Task.styles";
import { CheckboxElement } from "../Checkbox";
import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaBitbucket, FaCross, FaPen, FaPlus, FaTrash } from "react-icons/fa";

export const Task = ({ task, handleToggle, handleRemove, editingTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.text);

  const handleChange = (e) => {
    if (e.code === "Enter") {
      setIsEditing(false);
      editingTask(task.id, taskText);
    }
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const deliteTask = () => {
    handleRemove(task.id);
  };
  return (
    <TaskText checked={task.checked}>
      {isEditing ? (
        <input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={handleChange}
        />
      ) : (
        task.text
      )}
      <span>{task.date}</span> <br></br>
      <ButtonGroup spacing="2" margin={2}>
        <Button
          _hover={{
            background: "red.500",
            color: "black",
          }}
          variant="solid"
          bg="red.300"
          size="xs"
          rightIcon={<FaTrash />}
          onClick={deliteTask}
        >
          Удалить
        </Button>
        <Button
          _hover={{
            background: "orange.500",
            color: "black",
          }}
          variant="solid"
          bg="orange"
          size="xs"
          rightIcon={<FaPen />}
          onClick={toggleEditing}
        >
          Редактировать
        </Button>
      </ButtonGroup>
      <CheckboxElement
        task={task}
        handleToggle={handleToggle}
      ></CheckboxElement>
    </TaskText>
  );
};
