import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import { Home } from './pages/home.tsx';

const router = createBrowserRouter([
  {
    path: '/home/:theme?',
    element: <Home />,
  },
  {
    path: '*',
    element: <Navigate to="/home" />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
