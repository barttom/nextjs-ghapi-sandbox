export type Repository = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  description: string;
  url: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
  stargazers_count: number;
}

export type RepositoriesResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}
