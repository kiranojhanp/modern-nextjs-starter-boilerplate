import React, { ReactNode } from 'react';

type IBodyProps = {
  children: ReactNode;
};

const Body = (props: IBodyProps) => {
  return <main className="flex-1 py-5 text-xl content">{props.children}</main>;
};

export default Body;
