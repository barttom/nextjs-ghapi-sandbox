'use client';

import React from 'react';
import {
  Button, Center, Container, HStack,
} from '@chakra-ui/react';

import { useRepositories } from '@/api';

export default function Home() {
  const { data, isLoading, error } = useRepositories();

  console.log(isLoading, error, data);
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
