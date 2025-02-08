'use client';

import React from 'react';
import {
  Center, Container,
} from '@chakra-ui/react';

import { RepositoriesParams, useRepositories } from '@/api';
import { ItemsList } from '@/components/ItemsList';

export default function Home() {
  const {
    data, isLoading,
  } = useRepositories({ q: 'honey', sort: 'name' as RepositoriesParams['sort'], order: 'asc' });

  return (
    <>
      <Container maxW="1200px" fluid px={16}>
        <ItemsList items={data?.items} isLoading={isLoading} />
      </Container>
      <Center />
    </>
  );
}
