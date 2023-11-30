import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Flex, useColorMode } from "@chakra-ui/react";

export const Header = () => {
  const { ColorMode } = useColorMode();
  return (
    <Flex
      w={"auto"}
      h={"auto"}
      justifyContent="flex-end"
      as="header"
      py={2}
      bg={ColorMode === "dark" ? "white" : "teal"}
    >
      <ColorModeSwitcher mr="2" />
    </Flex>
  );
};
