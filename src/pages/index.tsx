import { Main } from '@/templates/Main';
import { HomeMeta } from '@/utils/MetaConfig';

const Index = () => {
  return (
    <Main meta={<HomeMeta />}>
      <h1>Hello World</h1>
    </Main>
  );
};

export default Index;
