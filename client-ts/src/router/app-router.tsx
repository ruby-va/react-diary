import React, { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { privateRouter, publicRouter } from '@/router/router.tsx';
import { Context } from '@/main.tsx';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.authStore.checkAuth();
  }, []);

  if (store.authStore.isLoading) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '150px' }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <RouterProvider router={store.authStore.isAuth ? privateRouter : publicRouter} />
  );
});

export default AppRouter;
