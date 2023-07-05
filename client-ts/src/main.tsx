import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'normalize.css';
import '@/assets/styles/index.scss';
import RootStore from '@/store';

const store = new RootStore();

export const Context = createContext({
  store,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Context.Provider value={{ store }}>
    <App />
  </Context.Provider>,
);
