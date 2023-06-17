import { Layout } from './components/Layout';
import styled from 'styled-components';
import {
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor="#9413dc" padding="1.5em">
        <Box backgroundColor="#fff" borderRadius="25px" padding="1em">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Center>
            <Button onClick={login} colorScheme='teal' size='sm' width="100%" marginTop="1em">
              Entrar
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
