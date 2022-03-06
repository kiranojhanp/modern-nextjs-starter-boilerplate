import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import { AppConfig } from '@/utils/AppConfig';

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

        <main className="py-5 text-xl content">{props.children}</main>

        <footer className="py-8 text-sm text-center border-t border-gray-300">
          © Copyright {new Date().getFullYear()} {AppConfig.title}
        </footer>
      </div>
    </div>
  </>
);

export { Main };
