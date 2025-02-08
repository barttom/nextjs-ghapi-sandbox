'use client';

import React, { useEffect } from 'react';
import {
  Button, Center, Container, HStack,
} from '@chakra-ui/react';

import { useRepositories } from '@/api';

export default function Home() {
  const {
    data, isLoading, error, refetch,
  } = useRepositories();

  console.log(isLoading, error, data);

  useEffect(() => {
    setTimeout(() => {
      refetch({ q: 'some', per_page: 10 });
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
