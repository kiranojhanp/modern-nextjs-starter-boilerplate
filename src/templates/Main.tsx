import { ReactNode } from 'react';

import Body from '@/components/Body';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    <div className="px-1 w-full antialiased text-gray-700">
      {props.meta}

      <div className="mx-auto max-w-screen-md">
        <Navbar />
        <Body>{props.children}</Body>
        <Footer />
      </div>
    </div>
  </>
);

export { Main };
