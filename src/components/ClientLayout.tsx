'use client';

import React from 'react';
import Header from './header';
import { useFilter } from '@/context/FilterContext';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const { searchQuery, setSearchQuery } = useFilter();
  
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {children}
    </>
  );
};

export default ClientLayout; 