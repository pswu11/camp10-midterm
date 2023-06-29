import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className=" p-4">
        {' '}
        ein div
        <p className="text-h2 font-700 "> h1 header</p>
        <p> p test </p>
      </div>
      <h1 className="text-3xl font-bold underline">Welcome to the Midterm</h1>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
