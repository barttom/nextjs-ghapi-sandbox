import { components } from '@octokit/openapi-types';

export type Repository = components['schemas']['repository'];

export type RepositoriesParams = {
  q: string;
  sort?: 'updated' | 'stars' | 'forks' | 'help-wanted-issues' | undefined;
  order?: 'desc' | 'asc' | undefined;
  per_page?: number | undefined;
  page?: number | undefined;
}

export type RepositoriesResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}
