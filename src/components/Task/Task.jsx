import { TaskText } from "./Task.styles";
import { CheckboxElement } from "../Checkbox";
import { useState } from "react";
import {
  Button,
  Text,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Flex,
} from "@chakra-ui/react";
import { FaPen, FaTrash } from "react-icons/fa";

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
      w={"auto"}
      h={"auto"}
      className="TASK"
      bg={"teal.700"}
      fontFamily={"Impact "}
      fontSize={"1.1rem"}
      fontWeight={400}
      textAlign={"center"}
      checked={task.checked}
    >
      <CardBody>
        <Text
          m={"5px"}
          width={"auto"}
          fontSize={"calc(9px + 8 * (100vw - 320px) / 880)"}
        >
          {isEditing ? (
            <Input
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onKeyDown={handleChange}
            />
          ) : (
            <TaskText checked={task.checked}>{task.text}</TaskText>
          )}
        </Text>
      </CardBody>
      <Divider />
      <Flex p={"5px"} justifyContent={"space-around"}>
        <Text fontSize={"1.4rem"}>{task.date}</Text>
        <CheckboxElement
          task={task}
          handleToggle={handleToggle}
        ></CheckboxElement>
      </Flex>

      <CardFooter>
        <Flex wrap={"wrap"} gap="10px" w={"auto"}>
          <Button
            _hover={{
              background: "red.500",
              color: "black",
            }}
            variant="solid"
            bg="red.300"
            size="auto"
            p={"5px"}
            fontSize={"calc(9px + 8 * (100vw - 320px) / 880)"}
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
            size="auto"
            p={"5px"}
            fontSize={"calc(9px + 8 * (100vw - 320px) / 880)"}
            fontWeight={400}
            rightIcon={<FaPen />}
            onClick={toggleEditing}
          >
            Редактировать
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};
