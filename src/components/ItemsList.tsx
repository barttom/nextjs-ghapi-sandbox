import React from 'react';
import {
  Avatar, Badge, Card, HStack, Link, Stack, Text,
} from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';
import { RepositoriesResponse } from '@/api';
import { SkeletonText } from '@/components/ui/skeleton';

export type ItemsListProps = {
  items?: RepositoriesResponse['items'];
  isLoading?: boolean;
};

const loader = Array.from({ length: 10 }, () => (
  <Card.Root key={new Date().getTime()} size="md" variant="outline" my={4} px={8} py={4}>
    <Card.Body>
      <SkeletonText noOfLines={2} gap="4" />
    </Card.Body>
  </Card.Root>
));

export function ItemsList({ items, isLoading }: ItemsListProps) {
  if (isLoading) {
    return loader;
  }

  return items?.map((item) => (
    <Card.Root key={item.id} size="md" variant="outline" my={4} px={8} py={4}>
      <Card.Header mb={4}>
        <HStack>
          <Badge variant="solid" colorPalette="gray" size="lg" px={2}>
            <HiStar />
            {item.stargazers_count}
          </Badge>
          <Link href={item.html_url} target="_blank" variant="underline" fontWeight="semibold" fontSize="xl">
            {item.name}
          </Link>
        </HStack>
      </Card.Header>
      <Card.Body>
        <Stack direction={{ base: 'column', md: 'row' }} gap={2}>
          <HStack>
            <Avatar.Root size="xs">
              <Avatar.Image src={item.owner.avatar_url} />
            </Avatar.Root>
            <Link href={item.owner.html_url} target="_blank" fontWeight="semibold">{item.owner.login}</Link>
          </HStack>
          <HStack>
            <Stack hideBelow="md">
              {'| '}
            </Stack>
            <Text fontSize="sm">Created at:</Text>
            <Text fontWeight="semibold">{new Date(item.created_at as string).toLocaleDateString()}</Text>
          </HStack>
        </Stack>
      </Card.Body>
    </Card.Root>
  ));
}
