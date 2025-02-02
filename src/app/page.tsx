import React from 'react';
import {
  Button, Center, Container, HStack,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Center>
      <Container maxW="lg" fluid>
        <HStack>
          <Button>Click me</Button>
          <Button>Click me</Button>
        </HStack>
      </Container>
    </Center>
  );
}
