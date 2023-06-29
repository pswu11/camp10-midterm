import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SelectSeat } from './pages/SelectSeat';
import { MovieDetails } from './pages/Moviedetails';
import { Cast } from './pages/Cast';
import { SelectTime } from './pages/SelectTime';
import { Ticket } from './pages/Ticket';
import { RootLayout } from './layouts/RootLayout';
import { Genres } from './pages/Genres';
import { Movies } from './pages/Movies';
import { Bookmarks } from './pages/Bookmarks';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: ':MovieId',
            element: <MovieDetails />,
            children: [
              {
                path: 'cast',
                element: <Cast />,
              },
              {
                path: 'select-time',
                element: <SelectTime />,
              },
              {
                path: 'select-seat',
                element: <SelectSeat />,
              },
              {
                path: 'ticket',
                element: <Ticket />,
              },
            ],
          },
        ],
      },
      {
        path: 'bookmarks',
        element: <Bookmarks />,
      },
    ],
  },
  {
    path: 'genres',
    element: <Genres />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
