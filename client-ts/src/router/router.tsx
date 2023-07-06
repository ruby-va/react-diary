import { createBrowserRouter, RouteObject, Router } from 'react-router-dom';
import Home from '@/pages/home';
import CreatePost from '@/pages/create-post';
import Landing from '@/pages/landing';
import NotFound from '@/pages/not-found';

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add-note',
    element: <CreatePost />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const publicRouter = createBrowserRouter(publicRoutes);
export const privateRouter = createBrowserRouter(privateRoutes);
