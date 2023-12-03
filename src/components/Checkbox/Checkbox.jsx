import { Checkbox } from '@chakra-ui/react';

export const CheckboxElement = ({ task, handleToggle }) => {
   const onClick = () => {
      handleToggle(task.id);
   };
   return (
      <Checkbox
         isChecked={task.checked}
         colorScheme="teal"
         checked={task.checked}
         onChange={onClick}
      />
   );
};
