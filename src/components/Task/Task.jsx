import { TaskText } from "./Task.styles";
import { CheckboxElement } from "../Checkbox";
import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
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
    <Card
      w={260}
      className="TASK"
      bg={"teal.700"}
      borderRadius={20}
      fontFamily={"Impact "}
      fontSize={"1.1rem"}
      fontWeight={400}
      textAlign={"center"}
      checked={task.checked}
    >
      <CardBody className="tekst_data" maxW={"200"}>
        <Container>
          {isEditing ? (
            <Input
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onKeyDown={handleChange}
            />
          ) : (
            <TaskText checked={task.checked}>{task.text}</TaskText>
          )}
        </Container>
        {/* <Text fontSize={"0.9rem"}>{task.date}</Text> */}
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button
            _hover={{
              background: "red.500",
              color: "black",
            }}
            variant="solid"
            bg="red.300"
            size="xs"
            fontWeight={400}
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
            fontWeight={400}
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
      </CardFooter>
    </Card>
  );
};
