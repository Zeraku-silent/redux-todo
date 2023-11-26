import { Title } from "./components/Title";
import { List } from "./components/List";
import { Container, Text, Box, Heading, Divider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Container maxW="container.lg">
        <Box py={6} textAlign="center" margin={6}>
          <Heading size="2xl" fontSize="6xl" color="teal">
            Список дел
          </Heading>
        </Box>
      </Container>
      <Divider />

      <List />
    </div>
  );
}

export default App;
