'use client';

import React, { useEffect, useState } from 'react';
import {
  Alert, Box, Button,
  Center, Container, createListCollection, HStack, Icon, Input, Separator, Text,
} from '@chakra-ui/react';
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@/components/ui/pagination';

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select';

import { RepositoriesParams, useRepositories } from '@/api';
import { ItemsList } from '@/components/ItemsList';
import { FaGithub } from 'react-icons/fa';

const PAGE_SIZE = 50;

const sortList = createListCollection({
  items: [
    { label: 'Name, ascending', value: 'name.asc' },
    { label: 'Name, descending', value: 'name.desc' },
    { label: 'Stars, ascending', value: 'stars.asc' },
    { label: 'Stars, descending', value: 'stars.desc' },
    { label: 'Created, ascending', value: 'created_at.asc' },
    { label: 'Created, descending', value: 'created_at.desc' },
    { label: 'Owner, ascending', value: 'owner.asc' },
    { label: 'Owner, descending', value: 'owner.desc' },
  ],

});

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const params: RepositoriesParams = {
    q: 'honey', sort: 'name' as RepositoriesParams['sort'], order: 'asc', page: currentPage, per_page: PAGE_SIZE,
  };

  const {
    data, isLoading, refetch, error,
  } = useRepositories(params);

  const handleRestart = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    refetch(params);
  }, [currentPage]);

  return (
    <Box>
      <Box height="100px" background="gray.900" width="100%">
        <Center height="100%">
          <Container maxW="1200px" px={4} py={2}>
            <HStack flexWrap={{ mdDown: 'wrap' }}>
              <HStack>
                <Icon size="xl" alignItems="center" mr={2}>
                  <FaGithub />
                </Icon>
                <Text fontWeight="semibold" hideBelow="md">
                  Repositories
                </Text>
              </HStack>
              <Box width={{ base: '50%', mdDown: 'calc(100% - 48px)' }} margin="auto">
                <Input placeholder="Type repo name to start search" variant="outline" px={4} />
              </Box>
              <SelectRoot collection={sortList} size="xs" width={{ base: '240px' }} ml={{ mdDown: 'auto' }}>
                <SelectTrigger>
                  <SelectValueText px={4} placeholder="Sort by:" />
                </SelectTrigger>
                <SelectContent>
                  {sortList.items.map((movie) => (
                    <SelectItem item={movie} key={movie.value} p={2}>
                      {movie.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </HStack>
          </Container>
        </Center>
      </Box>
      <Separator />
      <Box height="calc(100vh - 170px)" overflow="scroll">
        <Center>
          <Container maxW="1200px" fluid px={4}>
            {error && (
              <Alert.Root status="error" px={8} py={4}>
                <Alert.Indicator />
                <Alert.Content>
                  <Alert.Title fontWeight="bold">Something went wrong (+_+) </Alert.Title>
                  <Alert.Description>
                    {error}
                    {' '}
                    <br />
                    <Button onClick={handleRestart} px={8} mt={8}>Restart</Button>
                  </Alert.Description>
                </Alert.Content>
              </Alert.Root>
            )}
            <ItemsList items={data?.items} isLoading={isLoading} />
          </Container>
        </Center>
      </Box>
      <Separator />
      <Box height="70px" alignSelf="flex-end">
        <Center>
          <PaginationRoot
            page={currentPage}
            onPageChange={({ page }) => setCurrentPage(page)}
            count={data?.total_count ?? 1}
            pageSize={PAGE_SIZE}
            defaultPage={1}
            py={4}
          >
            <HStack>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </HStack>
          </PaginationRoot>
        </Center>
      </Box>
    </Box>
  );
}
