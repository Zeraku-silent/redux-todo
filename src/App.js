import { Title } from "./components/Title";
import { List } from "./components/List";
import { Header } from "./components/Header";
import {
  Container,
  Text,
  Box,
  Heading,
  Divider,
  Center,
  Flex,
} from "@chakra-ui/react";

function App() {
  return (
    <Box maxW={"1530"} className="App">
      <Header />
      <Container>
        <Center className="header" textAlign="center" margin={6}>
          <Heading size="2xl" fontSize="6xl" color="teal">
            Список дел
          </Heading>
        </Center>
      </Container>

      <List />
    </Box>
  );
}

export default App;
