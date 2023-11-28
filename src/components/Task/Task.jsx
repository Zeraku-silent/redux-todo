import { TaskText } from "./Task.styles";
import { CheckboxElement } from "../Checkbox";
import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Indicator,
  Input,
  Text,
} from "@chakra-ui/react";
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
    <Container
      flexDirection={""}
      bg={"teal.700"}
      borderRadius={20}
      textAlign={"center"}
      w={400}
      p={2}
      m={2}
      fontFamily={"Impact "}
      fontSize={"1.2rem"}
      fontWeight={400}
      checked={task.checked}
    >
      <Flex>
        <Box p={2} m={2} w={"60%"}>
          {isEditing ? (
            <Input
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onKeyDown={handleChange}
            />
          ) : (
            <TaskText checked={task.checked}>{task.text}</TaskText>
          )}
        </Box>
        <Box m={2} p={2}>
          <Text fontSize={"1rem"}>{task.date}</Text> <br></br>
        </Box>
      </Flex>
      <Flex flexDirection={"column"}>
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
          <CheckboxElement
            task={task}
            handleToggle={handleToggle}
          ></CheckboxElement>
        </ButtonGroup>
      </Flex>
    </Container>
  );
};
