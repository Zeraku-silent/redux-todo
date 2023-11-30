export const CheckboxElement = ({ task, handleToggle }) => {
  const onClick = () => {
    handleToggle(task.id);
  };
  return (
    <input
      type="checkbox"
      colorScheme="teal"
      value={task.checked}
      checked={task.checked}
      onChange={onClick}
    ></input>
  );
};
