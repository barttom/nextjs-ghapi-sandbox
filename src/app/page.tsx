// 'use client';

import React from 'react';
import {
  Button, Center, Container, HStack,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: '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',
});
const fetchRepositories = await octokit.request('GET /search/repositories?q="cool"', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

export default function Home() {
  // const { data, error } = useQuery({
  //   queryFn: fetchRepositories,
  //   queryKey: ['repositories'],
  // });
  //
  // console.log('data', data);
  // console.log('error', error);

  console.log(fetchRepositories);

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
