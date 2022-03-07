import useStore from '@/stores/HomeStore';
import { Main } from '@/templates/Main';
import { HomeMeta } from '@/utils/MetaConfig';

const Index = () => {
  const { count, inc, dec } = useStore();
  return (
    <Main meta={<HomeMeta />}>
      <h1 className="text-6xl font-bold text-center">{count}</h1>
      <div className=" place-center-x">
        <button className="mr-4 btn btn-danger" onClick={dec}>
          -1
        </button>
        <button className="btn btn-primary" onClick={inc}>
          +1
        </button>
      </div>
    </Main>
  );
};

export default Index;
