'use client';

import React, { useEffect, useState } from 'react';
import {
  Center, Container, HStack,
} from '@chakra-ui/react';
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@/components/ui/pagination';

import { RepositoriesParams, useRepositories } from '@/api';
import { ItemsList } from '@/components/ItemsList';

const PAGE_SIZE = 50;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data, isLoading, refetch,
  } = useRepositories({
    q: 'honey', sort: 'name' as RepositoriesParams['sort'], order: 'asc', page: currentPage, per_page: PAGE_SIZE,
  });

  useEffect(() => {
    refetch({
      q: 'honey', sort: 'name' as RepositoriesParams['sort'], order: 'asc', page: currentPage, per_page: PAGE_SIZE,
    });
  }, [currentPage]);

  return (
    <Center>
      <Container maxW="1200px" fluid px={16}>
        <ItemsList items={data?.items} isLoading={isLoading} />
        <PaginationRoot
          page={currentPage}
          onPageChange={({ page }) => setCurrentPage(page)}
          count={data?.total_count ?? 1}
          pageSize={PAGE_SIZE}
          defaultPage={1}
        >
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Container>
    </Center>
  );
}
