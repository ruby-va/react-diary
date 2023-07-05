import router from './router';
import { RouterProvider } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Context } from '@/main.tsx';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    store.authStore.checkAuth();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
