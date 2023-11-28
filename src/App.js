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
    <Flex maxWidth={"1800x"} className="App" flexDirection={"column"}>
      <Header />
      <Container>
        <Center className="header" py={6} textAlign="center" margin={6}>
          <Heading size="2xl" fontSize="6xl" color="teal">
            Список дел
          </Heading>
        </Center>
      </Container>

      <List />
    </Flex>
  );
}

export default App;
