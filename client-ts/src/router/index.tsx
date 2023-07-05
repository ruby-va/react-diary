import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import CreatePost from '@/pages/create-post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add-note',
    element: <CreatePost />,
  },
]);

export default router;
