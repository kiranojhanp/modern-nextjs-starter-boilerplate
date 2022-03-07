import axios from 'axios';
import { useQuery } from 'react-query';

import { Main } from '@/templates/Main';
import { HomeMeta } from '@/utils/MetaConfig';

const Index = () => {
  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    axios
      .get('https://api.github.com/repos/tannerlinsley/react-query')
      .then((res) => res.data)
  );

  if (isLoading) return <Main meta={<HomeMeta />}>Loading...</Main>;

  if (error)
    return (
      <Main meta={<HomeMeta />}>
        An error has occurred: ${JSON.stringify(error)}
      </Main>
    );

  return (
    <Main meta={<HomeMeta />}>
      <h1>Hello World</h1>
      <code>{data.name}</code>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </Main>
  );
};

export default Index;
