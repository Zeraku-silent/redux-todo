import { Checkbox } from "@chakra-ui/react";

export const CheckboxElement = ({ task, handleToggle }) => {
  const onClick = () => {
    handleToggle(task.id);
  };
  return (
    <Checkbox
      colorScheme="teal"
      value={task.checked}
      checked={task.checked}
      onChange={onClick}
    ></Checkbox>
  );
};
