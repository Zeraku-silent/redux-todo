import { StyledCheckbox } from "./Checkbox.styles";

export const Checkbox = ({ task, handleToggle }) => {
  const onClick = () => {
    handleToggle(task.id);
  };
  return (
    <StyledCheckbox
      value={task.checked}
      checked={task.checked}
      type="checkbox"
      onChange={onClick}
    ></StyledCheckbox>
  );
};
