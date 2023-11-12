import { useState } from "react";
import { InputWrapper, StyledInput, StyledButton } from "./Controller.styles";

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
    <InputWrapper>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleSubmit}
      ></StyledInput>
      <StyledButton type="button" onClick={buttonClick}>
        ADD
      </StyledButton>
    </InputWrapper>
  );
};
