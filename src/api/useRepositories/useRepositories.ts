import { useEffect, useState } from 'react';
import { octokitClient } from '@/api/octokitClient';
import { RepositoriesResponse } from './types';

const url = 'GET /search/repositories?q="next"';

export const useRepositories = () => {
  const [data, setData] = useState<RepositoriesResponse | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  const fetchData = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await octokitClient.request(url, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (e: unknown) {
      setData(undefined);
      setError(((e as {message: string}).message));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading, data, error, refetch: fetchData,
  };
};
