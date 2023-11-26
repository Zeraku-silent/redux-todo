import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Flex, Container, useColorMode } from "@chakra-ui/react";

export const Header = () => {
  const { ColorMode } = useColorMode();
  return (
    <Box as="header" py={2} bg={ColorMode == "dark" ? "white" : "teal"}>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};
