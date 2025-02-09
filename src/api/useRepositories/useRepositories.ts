import { useEffect, useState } from 'react';
import { octokitClient } from '@/api/octokitClient';
import { RepositoriesParams, RepositoriesResponse } from './types';

type UseRepositoriesOptions = {
  enableInitialFetch?: boolean;
  initialParams?: RepositoriesParams;
}

const url = 'GET /search/repositories';

export const useRepositories = ({
  enableInitialFetch = true,
  initialParams = { q: '' },
}: UseRepositoriesOptions) => {
  const [data, setData] = useState<RepositoriesResponse | undefined>();
  const [isLoading, setIsLoading] = useState(enableInitialFetch);
  const [error, setError] = useState<string | undefined>();

  const fetchData = async (params: RepositoriesParams) => {
    try {
      setIsLoading(true);
      setError(undefined);

      const response = await octokitClient.request(url, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
        ...params,
      });

      if (response.status === 200) {
        // TODO: fix types for repos data
        setData(response.data as RepositoriesResponse);
      }
    } catch (e: unknown) {
      setData(undefined);
      setError(((e as {message: string}).message));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (enableInitialFetch) {
      fetchData(initialParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading, data, error, refetch: fetchData,
  };
};
