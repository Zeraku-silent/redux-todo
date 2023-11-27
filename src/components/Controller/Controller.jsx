import { useState } from "react";
import { StyledButton } from "./Controller.styles";
import { Container, Input, Button, InputGroup } from "@chakra-ui/react";
export const Controller = ({ addTodo }) => {
  const [value, setValue] = useState(" ");

  const handleSubmit = (e) => {
    if (e.code === "Enter" && value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };
  const buttonClick = () => {
    if (value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };
  return (
    <InputGroup padding={5}>
      <Input
        variant="flushed"
        placeholder="Что хотим сделать?"
        fontFamily="Roboto sans-serif bold"
        fontSize={"1.5rem"}
        textAlign="center"
        color="teal"
        // m={6}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleSubmit}
        size="lg"
      ></Input>
      <Button bg="teal" p="5" m={6} type="button" onClick={buttonClick}>
        Добавить
      </Button>
    </InputGroup>
  );
};
