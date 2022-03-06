import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

const index = () => {
  return (
    <footer className="py-8 text-sm text-center border-t border-gray-300">
      © Copyright {new Date().getFullYear()} {AppConfig.title}
    </footer>
  );
};

export default index;
