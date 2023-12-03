import { Container, Box, Heading, Center } from '@chakra-ui/react';
import { List } from './components/List';
import { Header } from './components/Header';

function App() {
   return (
      <Box w="auto" className="App">
         <Header />
         <Container w="auto">
            <Center className="header" margin={6}>
               <Heading w="auto" size="2xl" fontSize="6xl" color="teal">
                  Список дел
               </Heading>
            </Center>
         </Container>
         <List />
      </Box>
   );
}

export default App;
