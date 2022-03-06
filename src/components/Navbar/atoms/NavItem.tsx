import React, { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

type INavItem = {
  href: string;
  children: ReactNode;
};

const NavItem = (props: INavItem) => {
  const router = useRouter();

  return (
    <li className="mr-6">
      <Link passHref href={props.href}>
        <a className={router.pathname === props.href ? 'active-link' : ''}>
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
