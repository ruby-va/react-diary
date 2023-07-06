import React from 'react';
import styles from './styles.module.scss';
import Header from '@/layout/header/Header.tsx';

const Index = () => {
  return (
    <div>
      <Header isSearchBar={false} isMenu={false} />
      <main>
        <div className="container">
          <h1>Landing page...</h1>
        </div>
      </main>
    </div>
  );
};

export default Index;
