import React from 'react';

import Link from 'next/link';

import NavItem from '@/components/atoms/NavItem';
import { AppConfig } from '@/utils/AppConfig';

const index = () => {
  return (
    <nav className="border-b border-gray-300 navbar">
      <div className="pt-16 pb-8">
        <Link href="/">
          <a className="text-3xl font-bold text-gray-900 hover:text-gray-700 border-none">
            {AppConfig.title}
          </a>
        </Link>
        <p className="text-xl">{AppConfig.description}</p>
      </div>

      <ul className="flex flex-wrap text-xl">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
      </ul>
    </nav>
  );
};

export default index;
